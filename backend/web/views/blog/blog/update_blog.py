import logging

from django.utils import timezone
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser

from web.models.blog import Blog, Tag
from web.views.utils.photo import remove_old_photo

logger = logging.getLogger(__name__)


class UpdateBlogView(APIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        try:
            blog_id = request.data.get('blog_id')
            title = request.data.get('title', '').strip()
            content = request.data.get('content', '').strip()
            tag_names = request.data.getlist('tags')
            cover_photo = request.FILES.get('cover_photo', None)
            blog = Blog.objects.get(id=blog_id, author__user=request.user)
            if not title:
                return Response({'result': '标题不能为空'})
            if not content:
                return Response({'result': '内容不能为空'})
            if cover_photo:
                if blog.cover_photo:
                    remove_old_photo(blog.cover_photo)
                blog.cover_photo = cover_photo
            blog.title = title
            blog.content = content
            blog.update_time = timezone.now()
            blog.save()
            blog.tags.clear()
            for name in tag_names:
                name = name.strip().lower()
                if name:
                    tag, _ = Tag.objects.get_or_create(name=name)
                    blog.tags.add(tag)
            try:
                cover_url = blog.cover_photo.url if blog.cover_photo else ''
            except Exception:
                cover_url = ''
            return Response({
                'result': 'success',
                'cover_photo': cover_url,
            })
        except Exception:
            logger.exception('更新博客失败')
            return Response({'result': '系统异常，请稍后重试'})