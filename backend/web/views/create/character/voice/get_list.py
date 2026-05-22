import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Voice

logger = logging.getLogger(__name__)


class GetVoiceListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            voices_raw = Voice.objects.order_by('-id')
            voices = [{"id": v.id, "name": v.name} for v in voices_raw]
            return Response({
                'result': 'success',
                'voices': voices,
            })
        except Exception:
            logger.exception('获取音色列表失败')
            return Response({'result': '系统异常，请稍后重试'})
