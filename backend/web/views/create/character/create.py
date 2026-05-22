#创建角色
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from web.models.character import Character, Voice
from web.models.user import UserProfile
class CreateCharacterView(APIView): # 继承自APIView，创建API视图
    # permission_classes: 权限类列表，控制谁可以访问这个视图
    # IsAuthenticated: 要求用户必须登录才能访问
    permission_classes = [IsAuthenticated]
    def post(self, request):         # 处理POST请求的方法
        try:
            # request.user: Django自动提供的当前登录用户对象
            user = request.user

            # UserProfile.objects.get(): 从数据库获取用户资料对象
            # get()方法会返回单个对象，如果找不到会抛出DoesNotExist异常
            user_profile = UserProfile.objects.get(user=user)

            # get方法传入的参数在request.query_params中；post方法传入的参数在request.data中
            # request.data: 获取POST请求的JSON数据或表单数据（DRF特性）
            # .get('name'): 安全的获取字典值，如果key不存在返回None
            # .strip(): 去除字符串两端的空白字符
            name = request.data.get('name').strip()
            voice_id = request.data.get('voice_id')         #为声音的id
            # [:100000]: 字符串切片，限制简介最大长度为100000字符
            profile = request.data.get('profile').strip()[:100000]
            photo = request.data.get('photo',None)

            # request.FILES: 获取通过multipart/form-data上传的文件
            # 注意：文件上传需要在HTML表单中添加enctype="multipart/form-data"
            background_image = request.FILES.get('background_image', None)
            if not name:
                return Response({
                    'result': '名字不能为空',
                })
            if not profile:
                return Response({
                    'result':'角色介绍不能为空'
                })
            if not photo:
                return Response({
                    'result':'头像不能为空'
                })
            if not background_image:
                return Response({
                    'result':'聊天背景不能为空'
                })
            voice = Voice.objects.get(id=voice_id)
            Character.objects.create(
                author=user_profile,
                name=name,
                voice=voice,
                profile=profile,
                photo=photo,
                background_image=background_image,
            )
            return Response({
                'result':'success'
            })
        except Exception:
            return Response({
                'result': '系统异常,创建失败,请稍后重试',
            })
