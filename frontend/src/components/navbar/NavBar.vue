<script setup>

import MenuIcon from "@/components/navbar/icons/MenuIcon.vue";
import HomepageIcon from "@/components/navbar/icons/HomepageIcon.vue";
import FriendIcon from "@/components/navbar/icons/FriendIcon.vue";
import CreateIcon from "@/components/navbar/icons/CreateIcon.vue";
import { useUserStore } from "@/stores/user";
import UserMenu from "@/components/navbar/UserMenu.vue";
import {ref, computed, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import SearchIcon from "@/components/navbar/icons/SearchIcon.vue";
import BlogListIcon from "@/views/blog/icon/BlogListIcon.vue";
import BlogCreateIcon from "@/views/blog/icon/BlogCreateIcon.vue";
import BlogManageIcon from "@/views/blog/icon/BlogManageIcon.vue";
const user=useUserStore()

const searchQuery = ref('')
const router = useRouter()
const route = useRoute()
watch(() => route.query.q, newQ => {
  searchQuery.value = newQ || ''
})

// 根据当前路由判断是否在博客相关页面
const isBlogPage = computed(() => {
  const path = route.path
  return path.startsWith('/blog')
})

// 动态placeholder
const searchPlaceholder = computed(() => {
  return isBlogPage.value
    ? '搜索文章标题、作者或内容...'
    : '搜索你感兴趣的角色...'
})

// 根据当前页面决定搜索跳转目标
function handleSearch(){
  const q = searchQuery.value.trim()
  if (isBlogPage.value) {
    router.push({ name: 'blog-index', query: { q } })
  } else {
    router.push({ name: 'homepage-index', query: { q } })
  }
}

const navItems = [
  { to: 'homepage-index', icon: HomepageIcon, label: '首页', tip: '首页' },
  { to: 'friend-index', icon: FriendIcon, label: '好友', tip: '好友' },
  { to: 'create-index', icon: CreateIcon, label: '创作', tip: '创作' },
]

const blogItems = [
  { to: 'blog-index', icon: BlogListIcon, label: '博客列表', tip: '博客列表' },
  { to: 'blog-create-index', icon: BlogCreateIcon, label: '博客创作', tip: '博客创作' },
  { to: 'blog-manage-index', icon: BlogManageIcon, label: '博客管理', tip: '博客管理' },
]

</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Top Navbar -->
      <nav class="nav-glass sticky top-0 z-50">
        <div class="navbar-start">
          <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost lg:hidden">
            <MenuIcon />
          </label>
          <div class="nav-brand ml-2 lg:ml-0">
            <span class="brand-icon">✦</span>
            <span class="brand-text">AIFriends</span>
          </div>
        </div>
        <div class="navbar-center flex-1 max-w-xl mx-4">
          <form @submit.prevent="handleSearch" class="search-bar w-full">
            <SearchIcon class="search-icon"/>
            <input
              v-model="searchQuery"
              class="search-input"
              :placeholder="searchPlaceholder"
            />
            <button type="submit" class="search-btn">搜索</button>
          </form>
        </div>
        <div class="navbar-end">
          <RouterLink v-if="user.isLogin()" :to="{name: 'create-index'}"
                      class="nav-create-btn">
            <CreateIcon/>
            <span>创作</span>
          </RouterLink>
          <RouterLink v-if="user.hasPulledUserInfo && !user.isLogin()" :to="{name: 'user-account-login-index'}"
                      class="nav-login-btn">
            登录
          </RouterLink>
          <UserMenu v-else-if="user.isLogin()"/>
        </div>
      </nav>
      <slot></slot>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side is-drawer-close:overflow-visible">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <aside class="sidebar-glass flex min-h-full flex-col items-start is-drawer-close:w-16 is-drawer-open:w-56">
        <!-- Logo: 只在展开时显示，用overflow-hidden防止截断 -->
        <div class="sidebar-logo">
          <span class="brand-icon-lg">✦</span>
          <span class="sidebar-logo-text">AIFriends</span>
        </div>

        <ul class="menu w-full grow px-2 gap-0.5">
          <li v-for="item in navItems" :key="item.to">
            <RouterLink
              :to="{name: item.to}"
              active-class="sidebar-active"
              class="sidebar-link is-drawer-close:tooltip is-drawer-close:tooltip-right"
              :data-tip="item.tip"
            >
              <component :is="item.icon" />
              <span class="sidebar-label">{{ item.label }}</span>
            </RouterLink>
          </li>

          <!-- Divider -->
          <li class="my-2">
            <div class="sidebar-divider">
              <span>博客</span>
            </div>
          </li>

          <li v-for="item in blogItems" :key="item.to">
            <RouterLink
              :to="{name: item.to}"
              active-class="sidebar-active"
              class="sidebar-link is-drawer-close:tooltip is-drawer-close:tooltip-right"
              :data-tip="item.tip"
            >
              <component :is="item.icon" />
              <span class="sidebar-label">{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>

        <!-- Footer -->
        <div class="sidebar-footer">
          <p>AI陪伴 · 创意表达</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
/* ── Navbar Glass ──────────────────────────────── */
.nav-glass {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1.25rem;
  background: rgba(250, 248, 245, 0.82);
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  border-bottom: 1px solid rgba(108, 92, 231, 0.08);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-icon {
  font-size: 1.25rem;
  color: var(--c-accent);
  filter: drop-shadow(0 0 6px rgba(108, 92, 231, 0.3));
}

.brand-text {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--c-ink);
  letter-spacing: -0.02em;
}

/* ── Search Bar ────────────────────────────────── */
.search-bar {
  display: flex;
  align-items: center;
  background: var(--c-surface);
  border: 1.5px solid rgba(108, 92, 231, 0.1);
  border-radius: var(--r-full);
  padding: 0 0.25rem 0 1rem;
  transition: all 0.3s var(--ease-out-expo);
  height: 2.5rem;
}

.search-bar:focus-within {
  border-color: var(--c-accent);
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.08);
}

.search-icon {
  flex-shrink: 0;
  color: var(--c-ink-muted);
  width: 1rem;
  height: 1rem;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0 0.75rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--c-ink);
  outline: none;
}

.search-input::placeholder {
  color: var(--c-ink-muted);
}

.search-btn {
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--c-accent), #8B5CF6);
  color: white;
  border: none;
  border-radius: var(--r-full);
  padding: 0.375rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
}

.search-btn:hover {
  box-shadow: 0 2px 12px rgba(108, 92, 231, 0.3);
}

/* ── Nav Buttons ───────────────────────────────── */
.nav-create-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: var(--r-full);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--c-accent);
  background: rgba(108, 92, 231, 0.06);
  transition: all 0.3s var(--ease-out-expo);
  margin-right: 0.75rem;
}

.nav-create-btn:hover {
  background: rgba(108, 92, 231, 0.12);
  color: var(--c-accent);
}

.nav-login-btn {
  padding: 0.5rem 1.5rem;
  border-radius: var(--r-full);
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, var(--c-accent), #8B5CF6);
  transition: all 0.3s var(--ease-out-expo);
  box-shadow: 0 2px 12px rgba(108, 92, 231, 0.25);
}

.nav-login-btn:hover {
  box-shadow: 0 4px 20px rgba(108, 92, 231, 0.35);
  transform: translateY(-1px);
}

/* ── Sidebar ───────────────────────────────────── */
.sidebar-glass {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  border-right: 1px solid rgba(108, 92, 231, 0.06);
  padding-top: 0.5rem;
}

/* Logo区域: 窄时隐藏文字，只显示图标；宽时完整显示 */
.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 1.25rem 0.75rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--c-ink);
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.brand-icon-lg {
  font-size: 1.5rem;
  color: var(--c-accent);
  filter: drop-shadow(0 0 8px rgba(108, 92, 231, 0.3));
  flex-shrink: 0;
}

/* 窄侧边栏时隐藏Logo文字，避免截断 */
.sidebar-logo-text {
  overflow: hidden;
}

@media (min-width: 1024px) {
  .drawer:not(:has(.drawer-toggle:checked)) .sidebar-logo-text {
    display: none;
  }
  .drawer:not(:has(.drawer-toggle:checked)) .sidebar-divider span,
  .drawer:not(:has(.drawer-toggle:checked)) .sidebar-footer p {
    display: none;
  }
  .drawer:not(:has(.drawer-toggle:checked)) .sidebar-label {
    display: none;
  }
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  border-radius: var(--r-md);
  font-size: 0.925rem;
  font-weight: 450;
  color: var(--c-ink-soft);
  transition: all 0.25s var(--ease-out-expo);
}

.sidebar-link:hover {
  background: rgba(108, 92, 231, 0.06);
  color: var(--c-accent);
}

.sidebar-active {
  background: rgba(108, 92, 231, 0.1) !important;
  color: var(--c-accent) !important;
  font-weight: 600;
}

.sidebar-label {
  white-space: nowrap;
}

.sidebar-divider {
  padding: 0.5rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--c-ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sidebar-footer {
  padding: 1rem 1.25rem;
  font-size: 0.75rem;
  color: var(--c-ink-muted);
  border-top: 1px solid rgba(108, 92, 231, 0.06);
  width: 100%;
  text-align: center;
}
</style>
