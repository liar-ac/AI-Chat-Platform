<script setup>
import SendIcon from "@/components/navbar/icons/SendIcon.vue";
import MicIcon from "@/components/navbar/icons/MicIcon.vue";
import {onUnmounted, ref, useTemplateRef} from "vue";
import api from "@/js/http/api.js";
import streamApi from "@/js/http/streamApi.js";
import Microphone from "@/components/character/chat_field/input_field/Microphone.vue";

const props=defineProps(['friendId'])
const emit =defineEmits(['pushBackMessage','addToLastMessage'])

const inputRef=useTemplateRef('input-ref')
const message=ref('')

let processId=0
const showMic =ref(false)

// Audio streaming
let mediaSource = null;
let sourceBuffer = null;
let audioPlayer = new Audio();
let audioQueue = [];
let isUpdating = false;

const initAudioStream = () => {
    audioPlayer.pause();
    audioQueue = [];
    isUpdating = false;

    mediaSource = new MediaSource();
    audioPlayer.src = URL.createObjectURL(mediaSource);

    mediaSource.addEventListener('sourceopen', () => {
        try {
            sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
            sourceBuffer.addEventListener('updateend', () => {
                isUpdating = false;
                processQueue();
            });
        } catch (e) {
            console.error("MSE AddSourceBuffer Error:", e);
        }
    });

    audioPlayer.play().catch(e => console.error("等待用户交互以播放音频"));
};

const processQueue = () => {
    if (isUpdating || audioQueue.length === 0 || !sourceBuffer || sourceBuffer.updating) {
        return;
    }
    isUpdating = true;
    const chunk = audioQueue.shift();
    try {
        sourceBuffer.appendBuffer(chunk);
    } catch (e) {
        console.error("SourceBuffer Append Error:", e);
        isUpdating = false;
    }
};

const stopAudio = () => {
    audioPlayer.pause();
    audioQueue = [];
    isUpdating = false;

    if (mediaSource) {
        if (mediaSource.readyState === 'open') {
            try {
                mediaSource.endOfStream();
            } catch (e) {}
        }
        mediaSource = null;
    }

    if (audioPlayer.src) {
        URL.revokeObjectURL(audioPlayer.src);
        audioPlayer.src = '';
    }
};

const handleAudioChunk = (base64Data) => {
    try {
        const binaryString = atob(base64Data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        audioQueue.push(bytes);
        processQueue();
    } catch (e) {
        console.error("Base64 Decode Error:", e);
    }
};

onUnmounted(() => {
    stopAudio();
});

function focus(){
  inputRef.value.focus()
}

async function handleSend(event,audio_msg){
  let content
  if (audio_msg){
    content=audio_msg.trim()
  }else{
    content = message.value.trim()
  }
  if (!content) return

  initAudioStream()
  const curId = ++processId
  message.value=''

  emit('pushBackMessage', {
    role: 'user',
    content: content,
    id: crypto.randomUUID()
  })

  emit('pushBackMessage', {
    role: 'ai',
    content: '',
    id: crypto.randomUUID()
  })

  try {
    await streamApi('/api/friend/message/chat/',{
      body:{
        friend_id : props.friendId,
        message:content,
      },
      onmessage(data){
        if (curId!==processId) return
        if (data.content){
          emit('addToLastMessage',data.content)
        }
        if (data.audio){
          handleAudioChunk(data.audio)
        }
      },
    })
  }catch (err){
    console.error('发送消息失败:', err)
  }
}

function close(){
  ++processId
  showMic.value=false
  stopAudio()
}

function handleStop(){
  ++processId
  stopAudio()
}

defineExpose({
  focus,
  close,
})
</script>

<template>
  <form v-if="!showMic" @submit.prevent="handleSend" class="input-bar">
    <input
      v-model="message"
      ref="input-ref"
      class="input-field"
      type="text"
      placeholder="说点什么..."
    />
    <div class="input-actions">
      <button type="button" @click="showMic=true" class="input-action-btn" title="语音输入">
        <MicIcon/>
      </button>
      <button type="button" @click="handleSend" class="input-send-btn" title="发送">
        <SendIcon/>
      </button>
    </div>
  </form>
  <Microphone
    v-else-if="showMic"
    @close="showMic=false"
    @send="handleSend"
    @stop="handleStop"
  />
</template>

<style scoped>
.input-bar {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  right: 0.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  border-radius: var(--r-full);
  padding: 0 0.375rem 0 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.input-field {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-family: var(--font-body);
  font-size: 0.9rem;
  padding: 0;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.input-actions {
  display: flex;
  align-items: center;
  gap: 0.125rem;
}

.input-action-btn,
.input-send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s;
}

.input-action-btn:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.input-send-btn {
  background: linear-gradient(135deg, var(--c-accent), #8B5CF6);
  color: white;
}

.input-send-btn:hover {
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.4);
}
</style>
