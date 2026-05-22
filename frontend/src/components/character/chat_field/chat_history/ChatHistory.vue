<script setup>
import Message from "@/components/character/chat_field/chat_history/message/Message.vue";
import {nextTick, onBeforeUnmount, onMounted, useTemplateRef} from "vue";
import api from "@/js/http/api.js";

const props = defineProps(['history','friendId','character'])
const emit = defineEmits(['pushFrontMessage'])
const scrollRef=useTemplateRef('scroll-ref')
const sentinelRef = useTemplateRef('sentinel-ref')
let isLoading=false
let hasMessages=true
let lastMessageId=0

async function loadMore(){
  if (isLoading||!hasMessages) return
  isLoading=true
  let newMessages=[]
  try{
    const res = await api.get('api/friend/message/get_history/',{
      params:{
        last_message_id:lastMessageId,
        friend_id:props.friendId
      }
    })
    const data=res.data
    if (data.result === 'success'){
      newMessages=data.messages
    }
  }catch (err){
  }finally {
    isLoading=false
    if (newMessages.length===0){
      hasMessages=false
    }else {
      const oldHeight=scrollRef.value.scrollHeight
      for (const m of newMessages){
        emit('pushFrontMessage',{
          role:'ai',
          content:m.output,
          id:crypto.randomUUID()
        })
        emit('pushFrontMessage',{
          role:'user',
          content:m.user_message,
          id:crypto.randomUUID()
        })
        lastMessageId=m.id
      }
      await nextTick()
      const newHeight = scrollRef.value.scrollHeight
      scrollRef.value.scrollTop += newHeight- oldHeight
      if (checkSentinelVisible()){
        await loadMore()
      }
    }
  }
}

async function scrollToBottom(){
  await nextTick()
  scrollRef.value.scrollTop = scrollRef.value.scrollHeight
}

let observer = null

function checkSentinelVisible() {
  if (!sentinelRef.value) return false
  const rect = sentinelRef.value.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

onMounted(async () => {
  await loadMore()
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadMore()
        }
      })
    },
    {root: scrollRef.value, rootMargin: '2px', threshold: 0}
  )
  if (sentinelRef.value) observer.observe(sentinelRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

defineExpose({
  scrollToBottom
})
</script>

<template>
  <div ref="scroll-ref" class="chat-scroll">
    <div ref="sentinel-ref" class="h-2"></div>
    <Message
      v-for="message in history"
      :key="message.id"
      :message="message"
      :character="character"
    />
  </div>
</template>

<style scoped>
.chat-scroll {
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 4.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.chat-scroll::-webkit-scrollbar {
  width: 4px;
}

.chat-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.chat-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}
</style>
