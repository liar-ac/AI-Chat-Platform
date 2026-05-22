import logging

from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response

from web.models.character import Character
from web.models.user import UserProfile

logger = logging.getLogger(__name__)


class GetListCharacterView(APIView):
    def get(self, request):
        try:
            raw_count = request.query_params.get('item_count', '0')
            raw_user_id = request.query_params.get('user_id')
            if not raw_user_id or not raw_user_id.isdigit():
                return Response({'result': '参数错误'})
            if not raw_count.lstrip('-').isdigit():
                return Response({'result': '参数错误'})

            item_count = max(0, int(raw_count))
            user_id = int(raw_user_id)
            user = User.objects.get(id=user_id)
            user_profile = UserProfile.objects.get(user=user)
            characters_raw = Character.objects.filter(author=user_profile).order_by('-id')[item_count:item_count + 20]
            characters_list = []
            for character in characters_raw:
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

                characters_list.append({
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
                })
            try:
                profile_photo_url = user_profile.photo.url if user_profile.photo else None
            except Exception:
                profile_photo_url = None

            return Response({
                'result': 'success',
                'user_profile': {
                    'user_id': user.id,
                    'username': user.username,
                    'profile': user_profile.profile,
                    'photo': profile_photo_url,
                },
                'characters': characters_list,
            })
        except User.DoesNotExist:
            return Response({'result': '用户不存在'})
        except Exception:
            logger.exception('获取角色列表失败')
            return Response({'result': '系统异常，请稍后重试'})
