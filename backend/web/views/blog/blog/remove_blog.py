#删除博客
# /api/blog/remove/
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.blog import Blog, Tag


class RemoveBlogView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self,request):
        try:
            blog_id = request.data.get('blog_id')
            blog = Blog.objects.get(id=blog_id,author__user=request.user)
            if blog.cover_photo:
                blog.cover_photo.delete(save=False)
            blog.delete()
            Tag.objects.filter(blog__isnull=True).delete()
            return Response({
                'result': 'success',
            })
        except Exception:
            return Response({
                'result': '系统异常，请稍后重试',
            })
