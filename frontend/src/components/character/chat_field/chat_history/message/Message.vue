<script setup>
import {useUserStore} from "@/stores/user.js";
import { resolveMediaUrl } from "@/js/http/api.js";

defineProps(['message','character'])
const user=useUserStore()
</script>

<template>
  <div v-if="message.content" class="message-row">
    <!-- AI message -->
    <div v-if="message.role==='ai'" class="message-ai">
      <div class="msg-avatar">
        <img :src="resolveMediaUrl(character.photo)" alt="" />
      </div>
      <div class="msg-bubble msg-bubble-ai">
        <span class="msg-text">{{ message.content }}</span>
      </div>
    </div>

    <!-- User message -->
    <div v-else class="message-user">
      <div class="msg-bubble msg-bubble-user">
        <span class="msg-text">{{ message.content }}</span>
      </div>
      <div class="msg-avatar">
        <img :src="resolveMediaUrl(user.photo)" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-row {
  padding: 0.375rem 0.75rem;
  animation: fadeUp 0.3s var(--ease-out-expo) both;
}

/* AI */
.message-ai {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.msg-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.msg-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.msg-bubble {
  max-width: 75%;
  padding: 0.625rem 0.875rem;
  border-radius: var(--r-lg);
  font-size: 0.875rem;
  line-height: 1.6;
  word-break: break-all;
  white-space: pre-wrap;
}

.msg-bubble-ai {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  color: var(--c-ink);
  border-bottom-left-radius: 0.25rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

/* User */
.message-user {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.5rem;
}

.msg-bubble-user {
  background: linear-gradient(135deg, var(--c-accent), #8B5CF6);
  color: white;
  border-bottom-right-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(108, 92, 231, 0.25);
}

.msg-text {
  font-family: var(--font-body);
}
</style>
