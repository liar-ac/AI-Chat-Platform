import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.friend import Friend
from web.models.user import UserProfile

logger = logging.getLogger(__name__)


class GetOrCreateFriendView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        try:
            character_id = request.data.get('character_id')
            if not character_id:
                return Response({'result': '参数错误'})
            user = request.user
            user_profile = UserProfile.objects.get(user=user)
            friends = Friend.objects.filter(character_id=character_id, me=user_profile)
            if friends.exists():
                friend = friends.first()
            else:
                friend = Friend.objects.create(character_id=character_id, me=user_profile)
            character = friend.character
            author = character.author
            try:
                photo_url = character.photo.url if character.photo else None
            except Exception:
                photo_url = None
            try:
                bg_url = character.background_image.url if character.background_image else None
            except Exception:
                bg_url = None
            try:
                author_photo_url = author.photo.url if author.photo else None
            except Exception:
                author_photo_url = None

            return Response({
                'result': 'success',
                'friend': {
                    'id': friend.id,
                    'character': {
                        'name': character.name,
                        'profile': character.profile,
                        'photo': photo_url,
                        'background_image': bg_url,
                        'author': {
                            'user_id': author.user_id,
                            'username': author.user.username,
                            'photo': author_photo_url,
                        }
                    }
                }
            })
        except Exception:
            logger.exception('获取或创建好友失败')
            return Response({'result': '系统异常，请稍后重试'})
