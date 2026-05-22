#删除博客
import logging

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.blog import Blog, Tag

logger = logging.getLogger(__name__)


class RemoveBlogView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        try:
            blog_id = request.data.get('blog_id')
            if not blog_id:
                return Response({'result': '参数错误'})
            blog = Blog.objects.get(id=blog_id, author__user=request.user)
            if blog.cover_photo:
                blog.cover_photo.delete(save=False)
            blog.delete()
            Tag.objects.filter(blog__isnull=True).delete()
            return Response({'result': 'success'})
        except Exception:
            logger.exception('删除博客失败')
            return Response({'result': '系统异常，请稍后重试'})
