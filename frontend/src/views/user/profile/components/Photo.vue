<script setup >
import Croppie from 'croppie'
import 'croppie/croppie.css'

import {nextTick, onBeforeUnmount, ref, useTemplateRef, watch} from "vue";
import CameraIcon from "@/views/user/profile/components/icon/CameraIcon.vue";
import {resolveMediaUrl} from "@/js/http/api.js";

const props = defineProps({
  photo: String,

  // 裁剪宽度
  viewportWidth: {
    type: Number,
    default: 200
  },

  // 裁剪比例  (1 = 1:1)
  aspectRatio: {
    type: Number,
    default: 1
  },

  // 裁剪形状
  viewportType: {
    type: String,
    default: 'square'
  }
})
const viewportHeight = () => props.viewportWidth / props.aspectRatio
const myPhoto = ref(props.photo)

watch(() => props.photo, newVal => {
  myPhoto.value = newVal
})

const fileInputRef=useTemplateRef('file-input-ref')
const modalRef=useTemplateRef('modal-ref')
const croppieRef=useTemplateRef('croppie-ref')
let croppie=null

// 异步打开图片裁剪模态框，初始化图片裁剪器并绑定图片
async function openModal(photo){
  modalRef.value.show()
  await nextTick()
  if (!croppie){
    croppie = new Croppie(croppieRef.value,{
        viewport:{
          width: props.viewportWidth,
          height: viewportHeight(),
          type: props.viewportType
        },

        boundary:{
          width: props.viewportWidth + 120,
          height: viewportHeight() + 120
        },
        enableOrientation:true,
        enforceBoundary:true,
        showZoomer:true
      })
  }
  croppie.bind({   //绑定裁剪图片
    url:photo,
  })
}
//获取图片裁剪结果，保存为base64格式，并关闭模态框
async function crop(){
  if (!croppie) return
  myPhoto.value=await croppie.result({  //获取裁剪结果
    type:'base64',
    size:'viewport',
  })
  modalRef.value.close()
}

// 处理用户选择的文件，读取为base64格式，然后打开裁剪模态框
//e 是 change 事件对象,用户选择了文件后触发
function onFileChange(e){

  // e.target -> 触发事件的input元素
  // .files   -> 用户选择的文件列表（FileList）
  // [0]      -> 取第一个文件（单个文件选择）
  const file = e.target.files[0]

  // 将文件输入框的值重置为空  ---若不清空，多次选择同一张图片不触发
  e.target.value = ''

  // 如果用户取消选择或文件不存在，直接退出
  if (!file) return
  // FileReader是浏览器API，用于读取文件内容
  const reader=new FileReader()
  // 文件读取完成后执行的回调函数
  reader.onload =()=>{
    openModal(reader.result)
  }
  // 将文件读取为Data URL格式（base64）
  reader.readAsDataURL(file)
}

//释放croppie对象，防止内存泄漏
onBeforeUnmount(()=>{
  croppie?.destroy()      //?-不存在就截断
})

defineExpose({
  myPhoto,
})
</script>

<template>
  <div class="flex justify-center">
    <div class="avatar relative">
      <div class="w-28 rounded-full">
        <img :src="resolveMediaUrl(myPhoto)" alt="">
      </div>
      <div @click="fileInputRef.click()" class="absolute left-0 top-0 w-28 h-28 flex justify-center
           items-center bg-black/20 rounded-full cursor-pointer">
        <CameraIcon />
      </div>
    </div>
  </div>
  <!-- 隐藏的文件选择输入框，专门用于接收用户选择的图片文件 -->
  <input ref="file-input-ref" type="file" accept="image/*" class="hidden" @change="onFileChange">
  <dialog ref="modal-ref" class="modal">
    <div class="modal-box transition-none">
      <button @click="modalRef.close()" class="btn btn-circle btn-sm btn-ghost absolute right-2 top-2">✕</button>

      <!-- croppie-ref 定义croppie绑定的标签  -->
      <div ref="croppie-ref" class="flex flex-col justify-center my-4"></div>
      <div class="modal-action">
        <button @click="modalRef.close()" class="btn">取消</button>
        <button @click="crop" class="btn">确定</button>
      </div>
    </div>

  </dialog>

</template>

<style scoped>

</style>
