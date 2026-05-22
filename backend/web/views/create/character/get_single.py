#获取角色
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from web.models.character import Character, Voice


class GetSingleCharacterView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            character_id = request.query_params.get('character_id')
            # filter()是Django ORM中最常用和最重要的方法之一，用于查询数据库中的记录
            # filter: 返回类型 :QuerySet（查询集）   查询结果 : 0个、1个或多个对象
            # get: 返回类型:单个模型对象   查询结果 : 必须只有1个对象
            character = Character.objects.get(id=character_id,author__user=request.user)

            voices_raw = Voice.objects.order_by('-id')
            voices = []
            for voice in voices_raw:
                voices.append({
                    'id': voice.id,
                    'name': voice.name,
                })
            return Response({
                'result':'success',
                'character':{
                    'id': character.id,
                    'name': character.name,
                    'profile': character.profile,
                    'photo': character.photo.url,       #character.photo.url 属性返回的是文件的访问URL，而不是文件内容
                    'background_image': character.background_image.url,
                    'voice_id':character.voice.id,
                },
                'voices':voices
            })
        except Exception:
            return Response({
                'result': '系统异常,获取角色失败,请稍后重试',
            })
