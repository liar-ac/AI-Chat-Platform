#更新角色
import logging

from django.utils.timezone import now
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Character, Voice
from web.views.utils.photo import remove_old_photo

logger = logging.getLogger(__name__)


class UpdateCharacterView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            character_id = request.data.get('character_id')
            if not character_id:
                return Response({'result': '参数错误'})
            character = Character.objects.get(id=character_id, author__user=request.user)
            name = (request.data.get('name') or '').strip()
            profile = (request.data.get('profile') or '').strip()[:100000]
            photo = request.FILES.get('photo', None)
            background_image = request.FILES.get('background_image', None)
            voice_id = request.data.get('voice_id')
            if not name:
                return Response({'result': '名字不能为空'})
            if not profile:
                return Response({'result': '角色介绍不能为空'})
            if not voice_id:
                return Response({'result': '音色不能为空'})
            if photo:
                remove_old_photo(character.photo)
                character.photo = photo
            if background_image:
                remove_old_photo(character.background_image)
                character.background_image = background_image

            voice = Voice.objects.get(id=voice_id)
            character.voice = voice
            character.name = name
            character.profile = profile
            character.update_time = now()
            character.save()
            return Response({'result': 'success'})
        except Exception:
            logger.exception('更新角色失败')
            return Response({'result': '系统异常,更新角色失败,请稍后重试'})
