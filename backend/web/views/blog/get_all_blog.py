#获取所有博客
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.blog import Blog

#api/blog/list/?items_count=0
class GetAllBlogsView(APIView):
    def get(self, request):
        try:
            items_count = int(request.GET.get('items_count',0))
            blogs_raw = Blog.objects.all().select_related('author__user')\
                            .prefetch_related('tags').order_by('-create_time')[items_count:items_count+20]
            blogs = []
            for blog in blogs_raw:
                author = blog.author
                blogs.append({
                    'id': blog.id,
                    'title': blog.title,
                    'content': blog.content,
                    'cover_photo': blog.cover_photo.url if blog.cover_photo else None,
                    'tags': [tag.name for tag in blog.tags.all()],
                    'author': {
                        'user_id': author.user_id,
                        'username': author.user.username,
                        'photo':author.photo.url,
                    },
                })
            return Response({
                'result':'success',
                'blogs': blogs
            })
        except Exception:
            return Response({
                'result': '系统异常，请稍后重试',
            })
