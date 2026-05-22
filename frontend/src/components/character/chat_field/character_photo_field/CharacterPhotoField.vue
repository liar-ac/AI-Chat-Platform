<script setup>
import { resolveMediaUrl } from "@/js/http/api.js";

defineProps(['character'])
</script>

<template>
  <div class="character-header">
    <div class="ch-avatar">
      <img :src="resolveMediaUrl(character.photo)" alt="" />
    </div>
    <div class="ch-info">
      <span class="ch-name">{{ character.name }}</span>
      <span class="ch-status">在线</span>
    </div>
  </div>
</template>

<style scoped>
.character-header {
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem 0.375rem 0.375rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  border-radius: var(--r-full);
}

.ch-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

.ch-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ch-info {
  display: flex;
  flex-direction: column;
}

.ch-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  line-height: 1.2;
}

.ch-status {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>
