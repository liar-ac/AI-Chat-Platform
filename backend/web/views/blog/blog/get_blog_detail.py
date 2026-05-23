import logging

from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.blog import Blog

logger = logging.getLogger(__name__)


class GetBlogDetailView(APIView):
    def get(self, request, blog_id):
        try:
            blog = Blog.objects.select_related('author__user').prefetch_related('tags').get(id=blog_id)
            author = blog.author
            try:
                cover_url = blog.cover_photo.url if blog.cover_photo else None
            except Exception:
                cover_url = None
            try:
                photo_url = author.photo.url if author.photo else None
            except Exception:
                photo_url = None

            return Response({
                'result': 'success',
                'blog': {
                    'id': blog.id,
                    'title': blog.title,
                    'content': blog.content,
                    'cover_photo': cover_url,
                    'tags': [tag.name for tag in blog.tags.all()],
                    'author': {
                        'user_id': author.user_id,
                        'username': author.user.username,
                        'photo': photo_url,
                    }
                }
            })
        except Blog.DoesNotExist:
            return Response({'result': '博客不存在'}, status=404)
        except Exception:
            logger.exception('获取博客详情失败')
            return Response({'result': '系统异常'}, status=500)