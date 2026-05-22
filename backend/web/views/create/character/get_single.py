#获取角色
import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Character, Voice

logger = logging.getLogger(__name__)


class GetSingleCharacterView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            character_id = request.query_params.get('character_id')
            if not character_id:
                return Response({'result': '参数错误'})
            character = Character.objects.get(id=character_id, author__user=request.user)

            voices_raw = Voice.objects.order_by('-id')
            voices = [{'id': v.id, 'name': v.name} for v in voices_raw]

            try:
                photo_url = character.photo.url if character.photo else None
            except Exception:
                photo_url = None
            try:
                bg_url = character.background_image.url if character.background_image else None
            except Exception:
                bg_url = None

            return Response({
                'result': 'success',
                'character': {
                    'id': character.id,
                    'name': character.name,
                    'profile': character.profile,
                    'photo': photo_url,
                    'background_image': bg_url,
                    'voice_id': character.voice.id if character.voice else None,
                },
                'voices': voices
            })
        except Exception:
            logger.exception('获取角色失败')
            return Response({'result': '系统异常,获取角色失败,请稍后重试'})
