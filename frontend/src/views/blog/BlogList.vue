<script setup>
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from "vue"
import api, { resolveMediaUrl } from "@/js/http/api.js"
import { useRouter } from "vue-router"

const router = useRouter()
const blogs = ref([])
const itemsCount = ref(0)
const loading = ref(false)
const hasMore = ref(true)

const sentinelRef = useTemplateRef('sentinel-ref')
let observer = null

async function loadMore() {
  if (loading.value || !hasMore.value) return
  loading.value = true
  try {
    const res = await api.get('api/blog/list/', {
      params: { items_count: itemsCount.value }
    })
    if (res.data.result === 'success') {
      blogs.value.push(...res.data.blogs)
      itemsCount.value += res.data.blogs.length
      if (res.data.blogs.length < 20) hasMore.value = false
    }
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

const openDetail = (id) => router.push({ name: 'blog-detail', params: { blog_id: id } })

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

onMounted(async () => {
  await loadMore()
  observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) loadMore()
  })
  if (sentinelRef.value) observer.observe(sentinelRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="blog-page">
    <!-- Header -->
    <div class="blog-header fade-up">
      <h1 class="blog-title text-display">博客广场</h1>
      <p class="blog-subtitle">分享创意、故事与灵感</p>
    </div>

    <!-- Grid -->
    <div class="blog-grid">
      <article
        v-for="(blog, i) in blogs"
        :key="blog.id"
        @click="openDetail(blog.id)"
        class="blog-card"
        :style="{ animationDelay: `${Math.min(i * 0.06, 0.3)}s` }"
      >
        <!-- Cover -->
        <div v-if="blog.cover_photo" class="blog-cover">
          <img :src="resolveMediaUrl(blog.cover_photo)" alt="" />
        </div>
        <div v-else class="blog-cover-placeholder">
          <span>✦</span>
        </div>

        <!-- Content -->
        <div class="blog-content">
          <h2 class="blog-card-title">{{ blog.title }}</h2>
          <p class="blog-excerpt">{{ stripHtml(blog.content) }}</p>

          <div v-if="blog.tags?.length" class="blog-tags">
            <span v-for="tag in blog.tags" :key="tag" class="badge-tag">#{{ tag }}</span>
          </div>

          <div class="blog-author">
            <div class="author-avatar-sm">
              <img :src="resolveMediaUrl(blog.author.photo)" alt="" />
            </div>
            <span class="author-name-sm">{{ blog.author.username }}</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Sentinel -->
    <div ref="sentinel-ref" class="h-4"></div>

    <!-- Loading -->
    <div v-if="loading" class="loading-pulse">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <span>正在加载...</span>
    </div>

    <!-- Empty -->
    <div v-else-if="!hasMore && blogs.length === 0" class="empty-state fade-up">
      <div class="empty-icon">✦</div>
      <h3 class="empty-title">还没有博客</h3>
      <p class="empty-desc">成为第一个分享者，写下你的故事</p>
    </div>
  </div>
</template>

<style scoped>
.blog-page {
  padding: var(--s-page);
  max-width: 1280px;
  margin: 0 auto;
}

/* ── Header ────────────────────────────────────── */
.blog-header {
  text-align: center;
  padding: 2rem 1rem 1rem;
}

.blog-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--c-ink);
  margin: 0 0 0.375rem;
}

.blog-subtitle {
  font-size: 1rem;
  color: var(--c-ink-muted);
  margin: 0;
}

/* ── Grid ──────────────────────────────────────── */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  padding: 1.5rem 0;
}

/* ── Card ──────────────────────────────────────── */
.blog-card {
  background: var(--c-glass);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid var(--c-glass-border);
  border-radius: var(--r-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s var(--ease-out-expo);
  box-shadow:
    0 1px 2px var(--c-shadow),
    0 6px 20px var(--c-shadow);
  animation: fadeUp 0.5s var(--ease-out-expo) both;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 2px 4px var(--c-shadow),
    0 12px 40px var(--c-shadow-lg);
  border-color: rgba(108, 92, 231, 0.2);
}

.blog-card:hover .blog-cover img {
  transform: scale(1.05);
}

/* Cover */
.blog-cover {
  height: 12rem;
  overflow: hidden;
}

.blog-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out-expo);
}

.blog-cover-placeholder {
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(108, 92, 231, 0.06), rgba(245, 158, 11, 0.06));
  color: var(--c-accent-2);
  font-size: 2rem;
}

/* Content */
.blog-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.blog-card-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--c-ink);
  margin: 0;
  line-height: 1.4;
  transition: color 0.2s;
}

.blog-card:hover .blog-card-title {
  color: var(--c-accent);
}

.blog-excerpt {
  font-size: 0.875rem;
  color: var(--c-ink-soft);
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.blog-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.625rem;
  border-top: 1px solid rgba(108, 92, 231, 0.06);
}

.author-avatar-sm {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar-sm img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name-sm {
  font-size: 0.8rem;
  color: var(--c-ink-muted);
  font-weight: 500;
}

/* ── Empty ─────────────────────────────────────── */
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
