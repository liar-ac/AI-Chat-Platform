#更新角色
from django.utils.timezone import now

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Character, Voice
from web.views.utils.photo import remove_old_photo


class UpdateCharacterView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            character_id = request.data['character_id']
            character = Character.objects.get(id=character_id,author__user=request.user)
            name = request.data['name'].strip()
            profile = request.data['profile'].strip()[:100000]
            # request.FILES 是Django处理文件上传的核心组件，用于接收客户端上传的文件数据
            #是一个类似字典的对象，包含所有上传的文件
            # 只有在POST请求且包含 enctype="multipart/form-data" 时才有数据
            #每个文件都是一个 UploadedFile 对象
            photo = request.FILES.get('photo',None)
            background_image = request.FILES.get('background_image',None)
            voice_id = request.data['voice_id']
            if not name:
                return Response({
                    'result':'名字不能为空'
                })
            if not profile:
                return Response({
                    'result':'角色介绍不能为空'
                })
            if photo:
                remove_old_photo(character.photo)
                character.photo = photo
            if background_image:
                remove_old_photo(character.background_image)
                character.background_image = background_image

            voice=Voice.objects.get(id=voice_id)

            character.voice = voice
            character.name = name
            character.profile = profile
            character.update_time = now()
            character.save()
            return Response({
                'result':'success'
            })
        except Exception:
            return Response({
                'result': '系统异常,更新角色失败,请稍后重试'
            })
