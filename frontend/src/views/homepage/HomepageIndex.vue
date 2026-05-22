<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch} from "vue";
import api from "@/js/http/api.js";
import Character from "@/components/character/Character.vue";
import {useRoute} from "vue-router";

const characters = ref([])
const isLoading = ref(false)
const hasCharacters = ref(true)
const sentinelRef = useTemplateRef('sentinel-ref')
const route = useRoute()

function checkSentinelVisible() {
  if (!sentinelRef.value) return false
  const rect = sentinelRef.value.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

async function loadMore() {
  if (isLoading.value || !hasCharacters.value) return
  isLoading.value = true
  let newCharacters = []
  try {
    const res = await api.get('/api/homepage/index/', {
      params: {
        items_count: characters.value.length,
        search_query : route.query.q || '',
      }
    })
    const data = res.data
    if (data.result === 'success') {
      newCharacters = data.characters
    }
  } catch (err) {
  } finally {
    isLoading.value = false
    if (newCharacters.length === 0) {
      hasCharacters.value = false
    } else {
      characters.value.push(...newCharacters)
      await nextTick()
      if (checkSentinelVisible()) {
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

function reset(){
  characters.value=[]
  isLoading.value=false
  hasCharacters.value=true
  loadMore()
}
watch(()=>route.query.q,newQ=>{
  reset()
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="home-page">
    <!-- Hero Section (only show when no search) -->
    <div v-if="!route.query.q && characters.length > 0" class="hero-section fade-up">
      <h1 class="hero-title text-display">探索AI角色</h1>
      <p class="hero-subtitle">与独特的AI伙伴开启对话，发现无限可能</p>
    </div>

    <!-- Character Grid -->
    <div class="character-grid">
      <Character
        v-for="(character, i) in characters"
        :key="character.id"
        :character="character"
        :style="{ animationDelay: `${Math.min(i * 0.06, 0.3)}s` }"
      />
    </div>

    <!-- Sentinel -->
    <div ref="sentinel-ref" class="h-4"></div>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-pulse">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <span>正在加载...</span>
    </div>

    <!-- Empty State -->
    <div v-else-if="!hasCharacters && characters.length === 0" class="empty-state fade-up">
      <div class="empty-icon">✦</div>
      <h3 class="empty-title">还没有角色</h3>
      <p class="empty-desc">成为第一个创作者，打造属于你的AI伙伴</p>
    </div>

    <!-- End State -->
    <div v-else-if="!hasCharacters && characters.length > 0" class="end-state">
      <span class="end-line"></span>
      <span class="end-text">已经到底啦</span>
      <span class="end-line"></span>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: var(--s-page);
  max-width: 1360px;
  margin: 0 auto;
}

/* ── Hero ──────────────────────────────────────── */
.hero-section {
  text-align: center;
  padding: 2.5rem 1rem 1.5rem;
}

.hero-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--c-ink);
  margin: 0 0 0.5rem;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--c-ink-muted);
  margin: 0;
}

/* ── Grid ──────────────────────────────────────── */
.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2rem;
  justify-items: center;
  padding: 1.5rem 0;
}

/* ── Empty State ───────────────────────────────── */
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

/* ── End State ─────────────────────────────────── */
.end-state {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  justify-content: center;
}

.end-line {
  width: 3rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--c-ink-muted), transparent);
}

.end-text {
  font-size: 0.8rem;
  color: var(--c-ink-muted);
  white-space: nowrap;
}
</style>
