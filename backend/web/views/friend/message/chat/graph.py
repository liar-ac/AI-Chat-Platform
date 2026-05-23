import os
from typing import TypedDict, Annotated, Sequence

import lancedb
from django.utils.timezone import localtime, now
from langchain_community.vectorstores import LanceDB
from langchain_core.messages import BaseMessage
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langgraph.constants import START, END
from langgraph.graph import add_messages, StateGraph
from langgraph.prebuilt import ToolNode


from web.documents.utils.custom_embeddings import CustomEmbeddings


#对接大模型
class ChatGraph:
    @staticmethod
    def create_app():
        """
               创建并返回一个编译好的LangGraph应用
               这个方法构建了一个简单的对话图结构：
               1. 初始化大语言模型（使用DeepSeek）
               2. 定义Agent的状态类型（包含消息列表）
               3. 创建模型调用节点
               4. 构建图结构：START -> agent -> (tool -> agnet ->) END
        """

        # 装饰器 @tool
        @tool
        def get_time() -> str:
            """查询精确时间时，调用此函数。返回格式为：[年-月-日-时-分-秒]"""
            return localtime(now()).strftime("%Y-%m-%d %H:%M:%S")
        @tool
        def search_knowledge_base(query:str) -> str:
            """当用户查询阿里云百炼平台相关信息时，调用此函数。输入为要查询的问题，输出为查询结果"""
            db=lancedb.connect('./web/documents/lancedb_storage')
            embeddings=CustomEmbeddings()
            vector_db=LanceDB(
                connection=db,
                embedding=embeddings,
                table_name='my_knowledge_base',
            )
            docs = vector_db.similarity_search(query,k=3)
            context = '\n\n'.join([f'内容片段:{i+1}\n{docs.page_content}' for i,docs in enumerate(docs)])
            return f'从知识库中找到以下相关信息:\n\n{context}\n'
        tools=[get_time,search_knowledge_base]
        # 初始化大语言模型客户端
        # ChatOpenAI 兼容OpenAI API格式的模型，这里使用的是DeepSeek
        llm=ChatOpenAI(
            model='deepseek-chat',
            openai_api_key=os.getenv('API_KEY'),
            openai_api_base=os.getenv('API_BASE'),
            streaming=True,  # 流式输出
            model_kwargs = {
                "stream_options": {
                    "include_usage": True,  # 输出token消耗数量
                }
            }                   #.bind_tool(tools) 是 LangChain 框架中的一个方法，用于将工具函数绑定到 LLM 模型实例上
        ).bind_tools(tools)      #将定义好的工具（tools）绑定到大语言模型，使模型具备调用这些工具的能力。

        # 定义Agent的状态类型
        # TypedDict 是Python的类型提示，用于定义字典的结构
        class AgentState(TypedDict):
            """
                Agent的状态结构
                messages: 消息列表，使用Annotated和add_messages来定义如何合并消息
                add_messages是一个特殊的 reducer，它知道如何将新消息添加到现有消息列表中
            """
            messages: Annotated[Sequence[BaseMessage], add_messages]

        # 模型调用节点函数
        def model_call(state: AgentState) -> AgentState:
            """
                模型调用节点
                参数: state: 当前的Agent状态，包含消息列表
                返回:更新后的状态，包含模型生成的回复消息
            """
            # pprint(state['messages'])
            # 调用大语言模型，传入当前状态中的所有消息
            res = llm.invoke(state['messages'])
            return {
                'messages': [res],
            }

        #路由函数
        def should_continue(state: AgentState) -> str:
            # 1. 获取最后一条消息
            last_message = state['messages'][-1]
            # 2. 检查是否有工具调用
            if last_message.tool_calls: # 如果有工具调用
                return "tools"          # 下一步执行工具节点
            return "end"                # 结束

        # 创建工具节点
        tool_node = ToolNode(tools)

        # 创建状态图
        # StateGraph 是LangGraph的核心类，用于构建状态图
        graph = StateGraph(AgentState)
        # 添加节点
        # add_node(节点名称, 节点函数)
        graph.add_node('agent',model_call)
        graph.add_node('tools',tool_node)

        # 添加边连接
        # START是特殊的起始节点，指向agent节点
        graph.add_edge(START, 'agent')
        # # agent节点指向END（结束节点）
        # graph.add_edge('agent',END)

        # 构建条件边
        graph.add_conditional_edges(
            'agent',        #从agent节点出发
            should_continue,       # 路由函数：决定下一步去哪
            {             #映射表：函数返回值 -> 目标节点
                'tools':'tools',     # 如果返回"tools"，去tools节点
                'end': END,         # 如果返回"end"，结束流程
            }
        )
        # 构建固定边
        graph.add_edge('tools', 'agent')
        # 编译图并返回
        # compile()会将定义的图结构编译成可执行的应用
        return graph.compile()


