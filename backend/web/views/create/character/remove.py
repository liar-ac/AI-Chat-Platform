#删除角色
import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Character
from web.views.utils.photo import remove_old_photo

logger = logging.getLogger(__name__)


class RemoveCharacterView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            character_id = request.data.get('character_id')
            if not character_id:
                return Response({'result': '参数错误'})
            character = Character.objects.get(pk=character_id, author__user=request.user)
            remove_old_photo(character.photo)
            remove_old_photo(character.background_image)
            character.delete()
            return Response({'result': 'success'})
        except Exception:
            logger.exception('删除角色失败')
            return Response({'result': '系统异常,删除角色失败,请稍后重试'})