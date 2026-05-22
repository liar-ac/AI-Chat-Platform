import logging

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from web.models.user import UserProfile

logger = logging.getLogger(__name__)


class GetUserInfoView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            user = request.user
            user_profile = UserProfile.objects.get(user=user)
            try:
                photo_url = user_profile.photo.url if user_profile.photo else None
            except Exception:
                photo_url = None
            return Response({
                'result': 'success',
                'user_id': user.id,
                'username': user.username,
                'photo': photo_url,
                'profile': user_profile.profile,
            })
        except Exception:
            logger.exception('获取用户信息失败')
            return Response({'result': '系统异常，请稍后重试'})
