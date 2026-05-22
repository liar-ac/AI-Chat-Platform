import uuid

from django.conf import settings
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class UploadImageView(APIView):
    permission_classes = (IsAuthenticated,)
    allowed_exts = {"jpg", "jpeg", "png", "gif", "webp"}

    def post(self, request):
        image = request.FILES.get("file")
        if not image:
            return Response({
                "code": 1,
                "msg": "图片不能为空",
                "data": {
                    "errFiles": [],
                    "succMap": {},
                },
            })

        ext = image.name.rsplit(".", 1)[-1].lower() if "." in image.name else "png"
        if ext not in self.allowed_exts or not (image.content_type or "").startswith("image/"):
            return Response({
                "code": 1,
                "msg": "仅支持图片文件",
                "data": {
                    "errFiles": [image.name],
                    "succMap": {},
                },
            })

        filename = f"{uuid.uuid4().hex}.{ext}"
        relative_path = f"blog/editor/{filename}"
        output_path = settings.MEDIA_ROOT / relative_path
        output_path.parent.mkdir(parents=True, exist_ok=True)

        with output_path.open("wb") as f:
            for chunk in image.chunks():
                f.write(chunk)

        return Response({
            "code": 0,
            "msg": "",
            "data": {
                "errFiles": [],
                "succMap": {
                    image.name: f"{settings.MEDIA_URL}{relative_path}",
                },
            },
        })
