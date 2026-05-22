#创建blog post
from django.utils import timezone
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models import blog
from web.models.blog import Blog, Tag
from web.models.user import UserProfile


class CreateBlogView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            user = request.user
            author = UserProfile.objects.get(user=user)
            title = request.data.get('title','').strip()
            content = request.data.get('content','').strip()
            cover_photo = request.FILES.get('cover_photo', None)
            tags_name = request.data.getlist('tags')
            if not title:
                return Response({
                    'result': '标题不能为空',
                })
            if not content:
                return Response({
                    'result': '内容不能为空'
                })
            if not cover_photo:
                return Response({
                    'result': '封面不能为空'
                })
            blog = Blog.objects.create(
                author=author,
                title=title,
                content=content,
                cover_photo=cover_photo,
                create_time=timezone.now(),
                update_time=timezone.now(),
            )
            # 处理标签
            for name in tags_name:
                name = name.strip().lower()
                if name:
                    tag, _ = Tag.objects.get_or_create(name=name)
                    blog.tags.add(tag)
            return Response({
                'result': 'success',
            })
        except Exception:
            return Response({
                'result':'系统异常，请稍后重试'
            })

