<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef} from "vue";
import Character from "@/components/character/Character.vue";
import api from "@/js/http/api.js";

const friends=ref([])
const isLoading=ref(false)
const hasFriends=ref(true)
const sentinelRef=useTemplateRef('sentinel-ref')

function checkSentinelVisible() {
  if (!sentinelRef.value) return false
  const rect = sentinelRef.value.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

async function loadMore(){
  if (isLoading.value || !hasFriends.value) return
  isLoading.value=true
  let newFriends=[]
  try {
    const res=await api.get('api/friend/get_list/',{
      params:{
        items_count : friends.value.length,
      }
    })
    const data = res.data
    if(data.result ==='success'){
      newFriends=data.friends
    }
  }catch (err){
  }finally {
    isLoading.value=false
    if (newFriends.length===0){
      hasFriends.value=false
    }else{
      friends.value.push(...newFriends)
      await nextTick()
      if (checkSentinelVisible()){
        await loadMore()
      }
    }
  }
}

let observer = null
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
    {root: null, rootMargin: '2px', threshold: 0}
  )
  if (sentinelRef.value) observer.observe(sentinelRef.value)
})

function removeFriend(friendId) {
  friends.value = friends.value.filter(f => f.id !== friendId)
}

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="friend-page">
    <div class="friend-header fade-up">
      <h1 class="friend-title text-display">我的好友</h1>
      <p class="friend-subtitle">和你的AI伙伴们聊天吧</p>
    </div>

    <div class="character-grid">
      <Character
        v-for="(friend, i) in friends"
        :key="friend.id"
        :character="friend.character"
        :canRemoveFriend="true"
        :friendId="friend.id"
        @remove="removeFriend"
        :style="{ animationDelay: `${Math.min(i * 0.06, 0.3)}s` }"
      />
    </div>

    <div ref="sentinel-ref" class="h-4"></div>

    <div v-if="isLoading" class="loading-pulse">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <span>正在加载...</span>
    </div>

    <div v-else-if="!hasFriends && friends.length === 0" class="empty-state fade-up">
      <div class="empty-icon">✦</div>
      <h3 class="empty-title">还没有好友</h3>
      <p class="empty-desc">去首页探索有趣的AI角色，开始第一段对话吧</p>
    </div>
  </div>
</template>

<style scoped>
.friend-page {
  padding: var(--s-page);
  max-width: 1360px;
  margin: 0 auto;
}

.friend-header {
  text-align: center;
  padding: 2rem 1rem 1rem;
}

.friend-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--c-ink);
  margin: 0 0 0.375rem;
}

.friend-subtitle {
  font-size: 1rem;
  color: var(--c-ink-muted);
  margin: 0;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2rem;
  justify-items: center;
  padding: 1.5rem 0;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  text-align: center;
}

.empty-icon {
  font-size: 3rem;
  color: var(--c-accent-2);
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 12px rgba(108, 92, 231, 0.3));
}

.empty-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--c-ink);
  margin: 0 0 0.5rem;
}

.empty-desc {
  font-size: 0.9rem;
  color: var(--c-ink-muted);
  margin: 0;
}
</style>
