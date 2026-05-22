#获取我的博客列表
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.blog import Blog
from web.models.user import UserProfile


#GET api/blog/my_list/?items_count=0&user_id=2
class GetMyListView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            items_count = int(request.query_params.get('items_count', 0))

            blogs_raw = Blog.objects.filter(
                author__user=request.user
            ).prefetch_related('tags').order_by('-create_time')[items_count:items_count + 20]

            blogs = []

            for blog in blogs_raw:
                blogs.append({
                    'id': blog.id,
                    'title': blog.title,
                    'content': blog.content,
                    'cover_photo': blog.cover_photo.url if blog.cover_photo else None,
                    'tags': [tag.name for tag in blog.tags.all()],
                })

            return Response({
                'result': 'success',
                'blogs': blogs
            })
        except Exception:
            return Response({
                'result': '系统异常，请稍后重试',
            })
