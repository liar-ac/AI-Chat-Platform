<script setup>
import {computed, nextTick, ref, useTemplateRef} from "vue";
import CharacterPhotoField from "@/components/character/chat_field/character_photo_field/CharacterPhotoField.vue";
import InputField from "@/components/character/chat_field/input_field/InputField.vue";
import ChatHistory from "@/components/character/chat_field/chat_history/ChatHistory.vue";
import { resolveMediaUrl } from "@/js/http/api.js";

const props = defineProps(['friend'])
const modalRef = useTemplateRef('modal-ref')
const inputRef=useTemplateRef('input-ref')
const chatHistoryRef = useTemplateRef('chat-history-ref')
const history = ref([])

async function showModal(){
  modalRef.value.showModal()
  await nextTick()
  inputRef.value.focus()
}

const modalStyle = computed(() => {
  if (props.friend) {
    return {
      backgroundImage: `url(${resolveMediaUrl(props.friend.character.background_image)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  } else {
    return {}
  }
})

function handlePushBackMessage(msg){
  history.value.push(msg)
  chatHistoryRef.value.scrollToBottom()
}

function handleAddToLastMessage(delta){
  history.value.at(-1).content+=delta
  chatHistoryRef.value.scrollToBottom()
}

function handlePushFrontMessage(msg){
  history.value.unshift(msg)
}

function handleClose(){
  inputRef.value.close()
}

defineExpose({
  showModal,
})
</script>

<template>
<dialog ref="modal-ref" class="chat-modal" @close="handleClose">
  <div class="chat-container" :style="modalStyle">
    <!-- Frosted overlay -->
    <div class="chat-overlay">
      <!-- Close button -->
      <button @click="modalRef.close()" class="chat-close-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <!-- Character header -->
      <CharacterPhotoField v-if="friend" :character="friend.character"/>

      <!-- Chat history -->
      <ChatHistory
        ref="chat-history-ref"
        v-if="friend"
        :friendId="friend.id"
        :character="friend.character"
        :history="history"
        @pushFrontMessage="handlePushFrontMessage"
      />

      <!-- Input -->
      <InputField
        v-if="friend"
        :friendId="friend.id"
        ref="input-ref"
        @pushBackMessage="handlePushBackMessage"
        @addToLastMessage="handleAddToLastMessage"
      />
    </div>
  </div>
</dialog>
</template>

<style scoped>
.chat-modal {
  background: rgba(26, 22, 37, 0.6);
  backdrop-filter: blur(4px);
  padding: 0;
  border: none;
  max-width: 100vw;
  max-height: 100vh;
}

.chat-modal::backdrop {
  background: rgba(26, 22, 37, 0.5);
  backdrop-filter: blur(8px);
}

.chat-container {
  width: 24rem;
  height: 38rem;
  border-radius: var(--r-xl);
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(26, 22, 37, 0.2),
    0 24px 64px rgba(26, 22, 37, 0.15);
}

.chat-overlay {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(26, 22, 37, 0.25) 0%,
    rgba(26, 22, 37, 0.15) 30%,
    rgba(26, 22, 37, 0.2) 100%
  );
  backdrop-filter: blur(2px);
}

.chat-close-btn {
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  z-index: 50;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.chat-close-btn:hover {
  background: rgba(0, 0, 0, 0.4);
}
</style>
