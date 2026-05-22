import logging

from django.db.models import Q
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Character

logger = logging.getLogger(__name__)


class HomePageIndexView(APIView):
    def get(self, request):
        try:
            raw_count = request.query_params.get('items_count', '0')
            if not raw_count.lstrip('-').isdigit():
                return Response({'result': '参数错误'})
            items_count = max(0, int(raw_count))

            search_query = request.query_params.get('search_query', '').strip()
            if search_query:
                queryset = Character.objects.filter(
                    Q(name__icontains=search_query) | Q(profile__icontains=search_query)
                )
            else:
                queryset = Character.objects.all()

            characters_raw = queryset.order_by('-id')[items_count: items_count + 20]
            characters = []
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

                characters.append({
                    'id': character.id,
                    'name': character.name,
                    'profile': character.profile,
                    'photo': photo_url,
                    'background_image': bg_url,
                    'author': {
                        'user_id': author.user_id,
                        'username': author.user.username,
                        'photo': author_photo_url,
                    },
                })
            return Response({
                'characters': characters,
                'result': 'success',
            })
        except Exception:
            logger.exception('首页加载失败')
            return Response({
                'result': '系统异常，请稍后重试',
            })
