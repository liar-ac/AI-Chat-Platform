import logging

from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

logger = logging.getLogger(__name__)


class RefreshTokenView(APIView):
    def post(self, request):
        try:
            refresh_token = request.COOKIES.get('refresh_token')
            if not refresh_token:
                return Response({'result': '未登录'})
            refresh = RefreshToken(refresh_token)
            if settings.SIMPLE_JWT['ROTATE_REFRESH_TOKENS']:
                refresh.set_jti()
                response = Response({
                    'result': 'success',
                    'access': str(refresh.access_token),
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
            return Response({
                'result': 'success',
                'access': str(refresh.access_token),
            })
        except Exception:
            logger.exception('刷新token失败')
            return Response({'result': 'refresh token过期了'})
