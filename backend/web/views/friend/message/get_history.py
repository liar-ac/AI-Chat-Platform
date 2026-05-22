#前端获取存储的信息
import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.friend import Message

logger = logging.getLogger(__name__)


class GetHistoryView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            raw_id = request.query_params.get('last_message_id', '0')
            if not raw_id.lstrip('-').isdigit():
                return Response({'result': '参数错误'})
            last_message_id = int(raw_id)
            friend_id = request.query_params.get('friend_id')
            if not friend_id:
                return Response({'result': '参数错误'})

            queryset = Message.objects.filter(friend_id=friend_id, friend__me__user=request.user)
            if last_message_id > 0:
                queryset = queryset.filter(id__lt=last_message_id)
            messages_raw = queryset.order_by('-id')[:20]
            messages = []
            for m in messages_raw:
                messages.append({
                    'id': m.id,
                    'user_message': m.user_message,
                    'output': m.output,
                })
            return Response({
                'result': 'success',
                'messages': messages,
            })
        except Exception:
            logger.exception('获取聊天历史失败')
            return Response({'result': '系统异常，请稍后重试'})
