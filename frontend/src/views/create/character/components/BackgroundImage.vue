<script setup >
import {nextTick, onBeforeUnmount, ref, useTemplateRef, watch} from "vue";
import CameraIcon from "@/views/user/profile/components/icon/CameraIcon.vue";
import Croppie from "croppie";
import {resolveMediaUrl} from "@/js/http/api.js";

const props = defineProps({
  backgroundImage: String,
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
const getViewportHeight = () => props.viewportWidth / props.aspectRatio;
const myBackgroundImage = ref(props.backgroundImage)

watch(()=>props.backgroundImage,newVal=>{
  myBackgroundImage.value=newVal
})

const fileInputRef =useTemplateRef('file-input-ref')
const modalRef=useTemplateRef('modal-ref')
const croppieRef = useTemplateRef('croppie-ref')
let croppie=null
async function openModal(photo){
  modalRef.value.showModal()
  await nextTick()
  if (!croppie){
    const vH = getViewportHeight();
    croppie = new Croppie(croppieRef.value,{
        viewport:{
          width: props.viewportWidth,
          height: vH,
          type: props.viewportType
        },

        boundary:{
          width: props.viewportWidth + 40,
          height: vH + 40
        },
        enableOrientation:true,
        enforceBoundary:true,
        showZoomer:true
      })
  }
  croppie.bind({
    url:photo,
  })
}
async function crop(){
  if (!croppie) return
  myBackgroundImage.value=await croppie.result({
    type:'base64',
    size: { width: 1080 },
  })
  modalRef.value.close()
}
function onFileChange(e){
  const file = e.target.files[0]
  e.target.value=''
  if (!file) return
  const reader = new FileReader()
  reader.onload = () =>{
    openModal(reader.result)
  }
  reader.readAsDataURL(file)
}
onBeforeUnmount(()=>{
  croppie?.destroy()
})
defineExpose({
  myBackgroundImage,
})
</script>

<template>
 <fieldset class="fieldset">
   <label class="label text-base">聊天背景</label>
   <div class="avatar relative">
     <div v-if="myBackgroundImage" class="w-15 h-25 rounded-box">
       <img :src="resolveMediaUrl(myBackgroundImage)" alt="">
     </div>
     <div v-else class="w-15 h-25 rounded-box bg-base-200"></div>
     <div @click="fileInputRef.click()" class="w-15 h-25 rounded-box absolute left-0 top-0 bg-black/20
      flex justify-center items-center cursor-pointer">
       <CameraIcon/>
     </div>
   </div>
 </fieldset>
  <input ref="file-input-ref" type="file" class="hidden" accept="image/*" @change="onFileChange">
  <dialog ref="modal-ref" class="modal">
    <div class="modal-box transition-none max-w-2xl">
      <button @click="modalRef.close()" class="btn btn-sm btn-circle btn-ghost
        absolute right-2 top-2">✕</button>
      <div ref="croppie-ref" class="flex flex-col my-4"></div>
      <div class="modal-action">
        <button @click="modalRef.close()" class="btn">取消</button>
        <button @click="crop" class="btn btn-neutral">确定</button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>

</style>
