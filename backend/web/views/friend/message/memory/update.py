from django.utils.timezone import now
from langchain_core.messages import SystemMessage, HumanMessage

from web.models.friend import SystemPrompt, Message
from web.views.friend.message.memory.graph import MemoryGraph

def create_system_message():
    system_prompts = SystemPrompt.objects.filter(title='长期记忆').order_by('order_number')
    prompt = ''
    for sp in system_prompts:
        prompt += sp.prompt
    return SystemMessage(prompt)

def create_human_message(friend):
    prompt = f'【原始记忆】\n{friend.memory}\n'
    prompt += f'【最近对话】\n'
    message = list(Message.objects.filter(friend=friend).order_by('-id')[:20])
    message.reverse()
    for m in message:
        prompt += f'user:{m.user_message}\n'
        prompt += f'ai:{m.output}\n'
    return HumanMessage(prompt)
def update_memory(friend):
    graph=MemoryGraph.create_graph()
    inputs={
        'messages': [
            create_system_message(),
            create_human_message(friend)
        ],
    }
    # pprint(inputs)
    res = graph.invoke(inputs)
    friend.memory = res['messages'][-1].content
    # pprint(friend.memory)
    friend.update_time=now()
    friend.save()
