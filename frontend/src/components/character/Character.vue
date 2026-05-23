<script setup>

import {useUserStore} from "@/stores/user.js";
import {ref, useTemplateRef} from "vue";
import api, { resolveMediaUrl } from "@/js/http/api.js";
import UpdateIcon from "@/components/navbar/icons/UpdateIcon.vue";
import RemoveIcon from "@/components/navbar/icons/RemoveIcon.vue";
import {useRouter} from "vue-router";
import ChatField from "@/components/character/chat_field/ChatField.vue";


const props = defineProps(['character','canEdit','canRemoveFriend','friendId'])
const emit=defineEmits(['remove'])
const isHover = ref(false)
const user=useUserStore()
const router=useRouter()


async function handleRemoveFriend(){
  try{
    const res=await api.post('api/friend/remove/',{
      friend_id:props.friendId,
    })
    if (res.data.result === 'success'){
      emit('remove',props.friendId)
    }
  }catch (err){
    console.error('删除好友失败:', err)
  }
}
async function handleRemoveCharacter(){
  try{
    const res = await api.post('api/create/character/remove/',{
      character_id:props.character.id
    })
    if (res.data.result === 'success'){
      emit('remove',props.character.id)
    }
  }catch (err){
    console.error('删除角色失败:', err)
  }
}
const chatFieldRef=useTemplateRef('chat-field-ref')
const friend = ref(null)
async function openChatField(){
  if (!user.isLogin()){
    await router.push({
      name:'user-account-login-index'
    })
  }else {
    try{
      const res=await api.post('api/friend/get_or_create/',{
        character_id : props.character.id,
      })
      const data =res.data
      if (data.result === 'success'){
        friend.value =data.friend
        chatFieldRef.value.showModal()
      }
    }catch (err){
      console.error('打开聊天失败:', err)
    }
  }
}
</script>

<template>
  <div class="character-card-wrapper">
    <div
      class="character-card"
      @mouseover="isHover=true"
      @mouseout="isHover=false"
      @click="openChatField"
    >
      <!-- Background Image -->
      <div class="card-bg">
        <img
          :src="resolveMediaUrl(character.background_image)"
          :class="{'zoom-in': isHover}"
          alt=""
        />
      </div>

      <!-- Gradient Overlay -->
      <div class="card-overlay"></div>

      <!-- Action Buttons -->
      <div v-if="canEdit && character.author.user_id === user.id" class="card-actions">
        <RouterLink :to="{name: 'update-character', params: {character_id: character.id}}" class="action-btn" @click.stop>
          <UpdateIcon />
        </RouterLink>
        <button @click.stop="handleRemoveCharacter" class="action-btn action-btn-danger">
          <RemoveIcon />
        </button>
      </div>
      <div v-if="canRemoveFriend" class="card-actions">
        <button @click.stop="handleRemoveFriend" class="action-btn action-btn-danger">
          <RemoveIcon/>
        </button>
      </div>

      <!-- Character Info -->
      <div class="card-info">
        <div class="card-avatar">
          <img :src="resolveMediaUrl(character.photo)" alt="" />
        </div>
        <div class="card-meta">
          <h3 class="card-name">{{ character.name }}</h3>
          <p class="card-profile">{{ character.profile }}</p>
        </div>
      </div>

      <!-- Hover Hint -->
      <div class="card-hint" :class="{'visible': isHover}">
        <span>开始对话</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </div>

    <!-- Author -->
    <RouterLink :to="{name: 'user-space-index', params: {user_id: character.author.user_id}}" class="card-author">
      <div class="author-avatar">
        <img :src="resolveMediaUrl(character.author.photo)" alt="" />
      </div>
      <span class="author-name">{{ character.author.username }}</span>
    </RouterLink>

    <ChatField ref="chat-field-ref" :friend="friend"/>
  </div>
</template>

<style scoped>
.character-card-wrapper {
  display: flex;
  flex-direction: column;
  animation: fadeUp 0.5s var(--ease-out-expo) both;
}

.character-card {
  position: relative;
  width: 15rem;
  height: 25rem;
  border-radius: var(--r-xl);
  overflow: hidden;
  cursor: pointer;
  box-shadow:
    0 2px 8px rgba(26, 22, 37, 0.06),
    0 8px 24px rgba(26, 22, 37, 0.08);
  transition: all 0.5s var(--ease-out-expo);
}

.character-card:hover {
  box-shadow:
    0 4px 12px rgba(26, 22, 37, 0.08),
    0 16px 48px rgba(26, 22, 37, 0.14);
  transform: translateY(-6px);
}

/* Background */
.card-bg {
  position: absolute;
  inset: 0;
}

.card-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out-expo);
}

.card-bg img.zoom-in {
  transform: scale(1.08);
}

/* Overlay */
.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 22, 37, 0.75) 0%,
    rgba(26, 22, 37, 0.3) 40%,
    rgba(26, 22, 37, 0.05) 70%,
    transparent 100%
  );
  pointer-events: none;
}

/* Actions */
.card-actions {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  z-index: 10;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.35);
}

.action-btn-danger:hover {
  background: rgba(244, 63, 94, 0.6);
}

/* Character Info */
.card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.card-avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2.5px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.card-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
  line-height: 1.3;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.card-profile {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hover Hint */
.card-hint {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: rgba(108, 92, 231, 0.85);
  backdrop-filter: blur(8px);
  color: white;
  border-radius: var(--r-full);
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0;
  transition: all 0.35s var(--ease-out-expo);
  pointer-events: none;
  white-space: nowrap;
}

.card-hint.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Author */
.card-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.25rem;
  text-decoration: none;
  transition: opacity 0.2s;
  width: 15rem;
}

.card-author:hover {
  opacity: 0.7;
}

.author-avatar {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  font-size: 0.8rem;
  color: var(--c-ink-soft);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
