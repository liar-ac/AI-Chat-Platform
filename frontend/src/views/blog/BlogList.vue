<script setup>
import { ref, onMounted, onBeforeUnmount, useTemplateRef, watch } from "vue"
import api, { resolveMediaUrl } from "@/js/http/api.js"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()
const blogs = ref([])
const itemsCount = ref(0)
const initialLoading = ref(true)
const loadingMore = ref(false)
const hasMore = ref(true)
const errorMessage = ref('')

const sentinelRef = useTemplateRef('sentinel-ref')
let observer = null
let failedOnce = false
let requestId = 0  // 用于请求去重，只接受最新一次请求的结果

async function loadMore(isInitial = false) {
  if (loadingMore.value || !hasMore.value) return
  if (isInitial) {
    initialLoading.value = true
  } else {
    loadingMore.value = true
  }
  errorMessage.value = ''
  const myId = ++requestId
  try {
    const res = await api.get('api/blog/list/', {
      params: {
        items_count: itemsCount.value,
        search_query: route.query.q || '',
      }
    })
    // 如果期间有新的请求发起，丢弃本次结果
    if (myId !== requestId) return
    if (res.data.result === 'success') {
      const newBlogs = res.data.blogs || []
      blogs.value.push(...newBlogs)
      itemsCount.value += newBlogs.length
      if (newBlogs.length < 20) hasMore.value = false
      failedOnce = false
    } else {
      errorMessage.value = res.data.result || '接口返回异常'
      hasMore.value = false
      failedOnce = true
    }
  } catch (err) {
    if (myId !== requestId) return
    console.error('博客加载失败:', err)
    errorMessage.value = '博客加载失败，请检查后端服务或稍后重试'
    hasMore.value = false
    failedOnce = true
  } finally {
    if (myId === requestId) {
      initialLoading.value = false
      loadingMore.value = false
    }
  }
}

function retry() {
  errorMessage.value = ''
  hasMore.value = true
  failedOnce = false
  loadMore(blogs.value.length === 0)
}

const openDetail = (id) => router.push({ name: 'blog-detail', params: { blog_id: id } })

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

onMounted(async () => {
  await loadMore(true)
  observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !failedOnce) loadMore(false)
  }, { rootMargin: '200px' })
  if (sentinelRef.value) observer.observe(sentinelRef.value)
})

watch(() => route.query.q, () => {
  blogs.value = []
  itemsCount.value = 0
  hasMore.value = true
  failedOnce = false
  ++requestId  // 使旧请求的回调失效
  initialLoading.value = true
  loadMore(true)
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

    <!-- Initial Loading -->
    <div v-if="initialLoading" class="loading-pulse">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <span>正在加载...</span>
    </div>

    <!-- Error State -->
    <div v-else-if="errorMessage && blogs.length === 0" class="error-state fade-up">
      <div class="error-icon">!</div>
      <h3 class="error-title">{{ errorMessage }}</h3>
      <button @click="retry" class="retry-btn">重试</button>
    </div>

    <!-- Empty State -->
    <div v-else-if="!hasMore && blogs.length === 0" class="empty-state fade-up">
      <div class="empty-icon">✦</div>
      <h3 class="empty-title">暂无博客</h3>
      <p class="empty-desc">快来发布第一篇吧</p>
    </div>

    <!-- Blog Grid -->
    <div v-if="blogs.length > 0" class="blog-grid">
      <article
        v-for="(blog, i) in blogs"
        :key="blog.id"
        @click="openDetail(blog.id)"
        class="blog-card"
        :style="{ animationDelay: `${Math.min(i * 0.06, 0.3)}s` }"
      >
        <div v-if="blog.cover_photo" class="blog-cover">
          <img :src="resolveMediaUrl(blog.cover_photo)" alt="" />
        </div>
        <div v-else class="blog-cover-placeholder">
          <span>✦</span>
        </div>

        <div class="blog-content">
          <h2 class="blog-card-title">{{ blog.title }}</h2>
          <p class="blog-excerpt">{{ stripHtml(blog.content) }}</p>

          <div v-if="blog.tags?.length" class="blog-tags">
            <span v-for="tag in blog.tags" :key="tag" class="badge-tag">#{{ tag }}</span>
          </div>

          <div class="blog-author">
            <div class="author-avatar-sm">
              <img :src="resolveMediaUrl(blog.author?.photo)" alt="" />
            </div>
            <span class="author-name-sm">{{ blog.author?.username }}</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Load More Error (when some blogs already loaded) -->
    <div v-if="errorMessage && blogs.length > 0" class="load-more-error">
      <span>{{ errorMessage }}</span>
      <button @click="retry" class="retry-link">重试</button>
    </div>

    <!-- Sentinel -->
    <div ref="sentinel-ref" class="h-4"></div>

    <!-- Loading More -->
    <div v-if="loadingMore" class="loading-pulse">
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <div class="loading-dot"></div>
      <span>加载更多...</span>
    </div>

    <!-- End State -->
    <div v-else-if="!hasMore && blogs.length > 0 && !errorMessage" class="end-state">
      <span class="end-line"></span>
      <span class="end-text">已经到底啦</span>
      <span class="end-line"></span>
    </div>
  </div>
</template>

<style scoped>
.blog-page {
  padding: var(--s-page);
  max-width: 1280px;
  margin: 0 auto;
}

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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  padding: 1.5rem 0;
}

.blog-card {
  background: var(--c-glass);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid var(--c-glass-border);
  border-radius: var(--r-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s var(--ease-out-expo);
  box-shadow: 0 1px 2px var(--c-shadow), 0 6px 20px var(--c-shadow);
  animation: fadeUp 0.5s var(--ease-out-expo) both;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 2px 4px var(--c-shadow), 0 12px 40px var(--c-shadow-lg);
  border-color: rgba(108, 92, 231, 0.2);
}

.blog-card:hover .blog-cover img { transform: scale(1.05); }

.blog-cover { height: 12rem; overflow: hidden; }
.blog-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s var(--ease-out-expo); }

.blog-cover-placeholder {
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(108, 92, 231, 0.06), rgba(245, 158, 11, 0.06));
  color: var(--c-accent-2);
  font-size: 2rem;
}

.blog-content { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.625rem; }

.blog-card-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--c-ink);
  margin: 0;
  line-height: 1.4;
  transition: color 0.2s;
}

.blog-card:hover .blog-card-title { color: var(--c-accent); }

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

.blog-tags { display: flex; flex-wrap: wrap; gap: 0.375rem; }

.blog-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.625rem;
  border-top: 1px solid rgba(108, 92, 231, 0.06);
}

.author-avatar-sm { width: 1.5rem; height: 1.5rem; border-radius: 50%; overflow: hidden; flex-shrink: 0; }
.author-avatar-sm img { width: 100%; height: 100%; object-fit: cover; }
.author-name-sm { font-size: 0.8rem; color: var(--c-ink-muted); font-weight: 500; }

/* Error State */
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  text-align: center;
}

.error-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(244, 63, 94, 0.1);
  color: var(--c-rose);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.error-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--c-ink);
  margin: 0 0 1rem;
}

.retry-btn {
  padding: 0.625rem 2rem;
  border-radius: var(--r-full);
  background: linear-gradient(135deg, var(--c-accent), #8B5CF6);
  color: white;
  border: none;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
  box-shadow: 0 2px 12px rgba(108, 92, 231, 0.3);
}

.retry-btn:hover {
  box-shadow: 0 4px 20px rgba(108, 92, 231, 0.4);
  transform: translateY(-1px);
}

/* Load More Error */
.load-more-error {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  font-size: 0.85rem;
  color: var(--c-rose);
}

.retry-link {
  background: none;
  border: none;
  color: var(--c-accent);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  text-decoration: underline;
}

/* Empty */
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

.empty-desc { font-size: 0.9rem; color: var(--c-ink-muted); margin: 0; }

/* End State */
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

.end-text { font-size: 0.8rem; color: var(--c-ink-muted); white-space: nowrap; }
</style>
