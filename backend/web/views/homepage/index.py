from django.db.models import Q
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Character


class HomePageIndexView(APIView):
    def get(self, request):
        try:
            items_count=int(request.query_params.get('items_count'))
            # get() 方法的第二个参数 '' 表示：如果没有找到 search_query 参数，则返回空字符串作为默认值
            search_query=request.query_params.get('search_query','').strip()
            if search_query:
                queryset=Character.objects.filter(
                    # __icontains：包含且不区分大小写
                    Q(name__icontains=search_query) | Q(profile__icontains=search_query)
                )
            else:
                queryset=Character.objects.all()
            characters_raw = queryset.order_by('-id')[items_count: items_count+20]
            characters=[]
            for character in characters_raw:
                author = character.author
                characters.append({
                    'id': character.id,
                    'name': character.name,
                    'profile': character.profile,
                    'photo': character.photo.url,
                    'background_image': character.background_image.url,
                    'author': {
                        'user_id':author.user_id,
                        'username':author.user.username,
                        'photo':author.photo.url,
                    },
                })
            return Response({
                'characters': characters,
                'result':'success',
            })
        except Exception:
            return Response({
                'result':'home系统异常，请稍后重试',
            })
