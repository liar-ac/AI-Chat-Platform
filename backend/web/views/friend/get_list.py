import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.friend import Friend

logger = logging.getLogger(__name__)


class GetListFriendView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            raw_count = request.query_params.get('items_count', '0')
            if not raw_count.lstrip('-').isdigit():
                return Response({'result': '参数错误'})
            items_count = max(0, int(raw_count))

            friends_raw = Friend.objects.filter(
                me__user=request.user,
            ).order_by('-update_time')[items_count: items_count + 20]
            friends = []
            for friend in friends_raw:
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

                friends.append({
                    'id': friend.id,
                    'character': {
                        'id': character.id,
                        'name': character.name,
                        'profile': character.profile,
                        'photo': photo_url,
                        'background_image': bg_url,
                        'author': {
                            'user_id': author.user_id,
                            'username': author.user.username,
                            'photo': author_photo_url,
                        }
                    },
                })
            return Response({
                'result': 'success',
                'friends': friends
            })
        except Exception:
            logger.exception('获取好友列表失败')
            return Response({'result': '系统异常，请稍后重试'})
