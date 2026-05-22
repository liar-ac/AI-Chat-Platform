#获取我的博客列表
import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.blog import Blog

logger = logging.getLogger(__name__)


class GetMyListView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            raw_count = request.query_params.get('items_count', '0')
            if not raw_count.lstrip('-').isdigit():
                return Response({'result': '参数错误'})
            items_count = max(0, int(raw_count))

            blogs_raw = Blog.objects.filter(
                author__user=request.user
            ).prefetch_related('tags').order_by('-create_time')[items_count:items_count + 20]

            blogs = []
            for blog in blogs_raw:
                try:
                    cover_url = blog.cover_photo.url if blog.cover_photo else None
                except Exception:
                    cover_url = None
                blogs.append({
                    'id': blog.id,
                    'title': blog.title,
                    'content': blog.content,
                    'cover_photo': cover_url,
                    'tags': [tag.name for tag in blog.tags.all()],
                })

            return Response({
                'result': 'success',
                'blogs': blogs
            })
        except Exception:
            logger.exception('获取我的博客列表失败')
            return Response({'result': '系统异常，请稍后重试'})
