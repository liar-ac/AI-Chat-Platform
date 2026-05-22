# 获取所有博客
import logging

from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q

from web.models.blog import Blog

logger = logging.getLogger(__name__)


class GetAllBlogsView(APIView):
    def get(self, request):
        try:
            raw_count = request.GET.get('items_count', '0')
            if not raw_count.lstrip('-').isdigit():
                return Response({'result': '参数错误'})
            items_count = max(0, int(raw_count))
            search_query = request.GET.get('search_query', '').strip()

            qs = Blog.objects.all().select_related('author__user') \
                         .prefetch_related('tags')

            if search_query:
                qs = qs.filter(
                    Q(title__icontains=search_query) |
                    Q(content__icontains=search_query) |
                    Q(author__user__username__icontains=search_query) |
                    Q(tags__name__icontains=search_query)
                ).distinct()

            blogs_raw = qs.order_by('-create_time')[items_count:items_count + 20]

            blogs = []
            for blog in blogs_raw:
                author = blog.author
                # 安全获取头像URL
                try:
                    photo_url = author.photo.url if author.photo else None
                except Exception:
                    photo_url = None

                # 安全获取封面URL
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
                    'author': {
                        'user_id': author.user_id,
                        'username': author.user.username,
                        'photo': photo_url,
                    },
                    'create_time': blog.create_time.strftime('%Y-%m-%d %H:%M:%S'),
                })

            return Response({
                'result': 'success',
                'blogs': blogs,
            })

        except ValueError:
            return Response({'result': '参数错误'})
        except Exception as e:
            logger.exception('获取博客列表失败')
            return Response({'result': '系统异常，请稍后重试'})
