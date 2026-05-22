import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.friend import Friend

logger = logging.getLogger(__name__)


class RemoveFriendsView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            friend_id = request.data.get('friend_id')
            if not friend_id:
                return Response({'result': '参数错误'})
            Friend.objects.filter(id=friend_id, me__user=request.user).delete()
            return Response({'result': 'success'})
        except Exception:
            logger.exception('删除好友失败')
            return Response({'result': '系统异常，请稍后重试'})
