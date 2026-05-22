import asyncio
import base64
import json
import os
import threading
import uuid
from pprint import pprint

import websockets
from django.http import StreamingHttpResponse
from langchain_core.messages import HumanMessage, BaseMessageChunk, AIMessage, SystemMessage
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import BaseRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from queue import Queue

from web.models.friend import Friend, Message, SystemPrompt
from web.views.friend.message.chat.graph import ChatGraph
from web.views.friend.message.memory.update import update_memory


# 定义一个伪渲染器，防止 DRF 报错
class SSERenderer(BaseRenderer):
    media_type = 'text/event-stream'
    format = 'txt'
    def render(self, data, accepted_media_type=None, renderer_context=None):
        return data

# 添加系统提示词
def add_system_prompt(state,friend):
    msgs=state['messages']
    system_prompts=SystemPrompt.objects.filter(title='回复').order_by('order_number')
    prompt=''
    for sp in system_prompts:
        prompt+=sp.prompt
    prompt += f"\n[角色性格]\n{friend.character.profile}\n"
    prompt += f"【长期记忆】\n{friend.memory}\n"
    prompt += f"[ai的姓名]\n{friend.character.name}\n"
    return {
        'messages': [SystemMessage(prompt)]+msgs,
    }
# 添加最近的消息
def add_recent_message(state,friend):
    msgs=state['messages']
    message_raw=list(Message.objects.filter(friend=friend).order_by('-id')[:20])
    message_raw.reverse()
    messages=[]
    for m in message_raw:
        # LangChain 库的代码，用于创建一个人类消息
        # HumanMessage 是 LangChain 中的一个消息类型，用于表示用户/人类发送的消息
        messages.append(HumanMessage(m.user_message))
        messages.append(AIMessage(m.output))
    return {
        'messages': msgs[:1]+messages+msgs[-1:],
    }
class MessageChatView(APIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = (SSERenderer,)
    def post(self, request):
        friend_id = request.data.get('friend_id')
        message = (request.data.get('message') or '').strip()
        if not message:
            return Response({'result': '消息不能为空'})
        friends = Friend.objects.filter(id=friend_id,me__user=request.user)
        if not friends.exists():
            return Response({
                'result':'好友不存在'
            })
        friend = friends.first()
        app=ChatGraph.create_app()
        inputs={
            'messages':[HumanMessage(content=message)],
        }
        inputs=add_system_prompt(inputs,friend)
        inputs=add_recent_message(inputs,friend)
        # pprint(inputs)
        # 处理流式消息事件的生成器函数，主要作用是将AI模型的流式输出转换为Server-Sent Events (SSE) 格式
        # yield是Python的生层器

        # for data in event_stream():
        #     print(data)

        # 创建流式HTTP响应
        # StreamingHttpResponse是Django的特殊响应类，用于流式传输数据
        # event_stream()是生成器函数，会持续产生数据并推送给客户端
        response = StreamingHttpResponse(
            self.event_stream(app,inputs,friend,message),
            content_type='text/event-stream'
        )
        # 设置缓存控制头，禁用缓存
        # 确保客户端不会缓存SSE数据，实现真正的实时推送
        response['Cache-Control'] = 'no-cache'

        #避免Nginx缓存
        response['X-Accel-Buffering'] = 'no'
        # 返回流式响应
        # 连接将保持打开状态，持续推送数据直到event_stream()结束
        return response

    async def tts_sender(self, app, inputs, mq, ws, task_id):
        # 从app.stream获取消息和元数据，stream_mode="messages"表示以消息块形式返回
        for msg, metadata in app.stream(inputs, stream_mode="messages"):
            # 检查消息是否为BaseMessageChunk类型（消息块）
            if isinstance(msg, BaseMessageChunk):
                # 如果消息包含实际内容，将其包装为SSE格式
                if msg.content:
                   await ws.send(json.dumps({
                       "header": {
                           "action": "continue-task",
                           "task_id": task_id,  # 随机uuid
                           "streaming": "duplex"
                       },
                       "payload": {
                           "input": {
                               "text": msg.content,
                           }
                       }
                   }))
                   mq.put_nowait({'content': msg.content})
                #判断msg对象是否有'usage_metadata'这个属性
                if hasattr(msg, 'usage_metadata') and msg.usage_metadata:
                    mq.put_nowait({'usage':msg.usage_metadata})  # 持续更新，最终保留最后一条统计
    async def tts_receiver(self,mq,ws):
        async for msg in ws:
            # isinstance(要检查的对象, 类型)  返回 True 或 False
            # 检查接收到的消息是不是二进制数据（bytes类型） WebSocket可以传输文本或二进制数据，这里只处理二进制
            if isinstance(msg,bytes):
                # 这样做是为了让二进制数据（如音频）能够安全地在文本协议中传输
                audio = base64.b64encode(msg).decode('utf-8')
                mq.put_nowait({'audio': audio})
            else:
                data = json.loads(msg)
                event = data['header']['event']
                if event in ['task-finished', 'task-failed']:
                    break

    async def run_tts_tasks(self,app,inputs,mq,voice_id):
        task_id = uuid.uuid4().hex
        api_key = os.getenv('ALI_KEY')
        wss_url = os.getenv('WSS_URL')
        headers = {
            "Authorization": f"Bearer {api_key}",
        }
        async with websockets.connect(wss_url,additional_headers=headers) as ws:
            await ws.send(json.dumps({
                "header": {
                    "action": "run-task",  # 当前指令中，固定为"run-task"。
                    "task_id": task_id,
                    "streaming": "duplex"  # 双工通信模式，表示双向通信
                },
                "payload": {
                    "task_group": "audio",
                    "task": "tts",
                    "function": "SpeechSynthesizer",
                    "model": "cosyvoice-v3-flash",
                    "parameters": {
                        "text_type": "PlainText",
                        "voice": voice_id,
                        "format": "mp3",  # 音频格式
                        "sample_rate": 22050,  # 采样率
                        "volume": 50, # 音量
                        "rate": 1.25, # 语速
                        "pitch": 1 # 音调
                    },
                    "input": {  # input不能省去，不然会报错
                    }
                }
            }))
            async for msg in ws:
                if json.loads(msg)['header']['event'] == 'task-started':
                    break
            await asyncio.gather(
                self.tts_sender(app,inputs,mq,ws,task_id),
                self.tts_receiver(mq,ws)
            )
    def work(self,app,inputs,mq,voice_id):
        try:
            # asyncio.run() 启动事件循环执行异步函数
            asyncio.run(self.run_tts_tasks(app,inputs,mq,voice_id))
        finally:
            # 无论TTS任务成功还是失败，最终都要发送None信号
            # 告诉消费者线程：所有音频数据已经发送完毕
            mq.put_nowait(None)

    def event_stream(self,app,inputs,friend,message):
        mq = Queue()
        #创建线程  target指定新线程要执行的函数  args=(...)：传递给work函数的参数元组
        thread = threading.Thread(target=self.work,args=(app,inputs,mq,friend.character.voice.voice_id))
        thread.start()

        full_output = ''
        full_usage = {}  # 用于存储最终的token使用统计信息
        while True:
            msg = mq.get()
            if not msg:
                break
            if msg.get('content',None) :
                full_output += msg['content']
                yield f"data: {json.dumps({'content': msg['content']}, ensure_ascii=False)}\n\n"
            if msg.get('audio',None):
                yield f"data: {json.dumps({'audio': msg['audio']}, ensure_ascii=False)}\n\n"
            if msg.get('usage',None):
                full_usage = msg['usage']
        # 发送流式结束标记
        yield "data: [DONE]\n\n"
        # 打印最终的token使用统计（仅用于调试/监控）
        # print(full_usage)
        input_tokens = full_usage.get('input_tokens', 0)
        output_tokens = full_usage.get('output_tokens', 0)
        total_tokens = full_usage.get('total_tokens', 0)
        Message.objects.create(
            friend=friend,
            user_message=message[:1000],
            input=json.dumps(
                [m.model_dump() for m in inputs['messages']],
                ensure_ascii=False,
            )[:20000],
            output=full_output[:1000],
            input_tokens=input_tokens,
            output_tokens=output_tokens,
            total_tokens=total_tokens,
        )
        # 每五次对话更新一次长期记忆
        if Message.objects.filter(friend=friend).count() % 5 == 0:
            update_memory(friend)