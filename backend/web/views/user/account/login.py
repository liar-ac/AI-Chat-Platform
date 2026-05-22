import logging

from django.conf import settings
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from web.models.user import UserProfile

logger = logging.getLogger(__name__)


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            username = (request.data.get('username') or '').strip()
            password = (request.data.get('password') or '').strip()
            if not username or not password:
                return Response({'result': '用户名和密码不能为空'})
            user = authenticate(username=username, password=password)
            if user:
                user_profile = UserProfile.objects.get(user=user)
                refresh = RefreshToken.for_user(user)
                try:
                    photo_url = user_profile.photo.url if user_profile.photo else None
                except Exception:
                    photo_url = None
                response = Response({
                    'result': 'success',
                    'access': str(refresh.access_token),
                    'user_id': user.id,
                    'username': user.username,
                    'photo': photo_url,
                    'profile': user_profile.profile,
                })
                response.set_cookie(
                    key='refresh_token',
                    value=str(refresh),
                    httponly=True,
                    samesite='Lax',
                    secure=not settings.DEBUG,
                    max_age=86400 * 7,
                )
                return response
            return Response({'result': '用户名或密码错误'})
        except Exception:
            logger.exception('登录失败')
            return Response({'result': '系统异常，请稍后重试'})
