<script setup>
import api from "@/js/http/api";
import { useUserStore } from "@/stores/user";
import {ref} from "vue";
import { useRouter } from "vue-router";

const username=ref('')
const password=ref('')
const errorMessage=ref('')
const user=useUserStore()
const router=useRouter()

async function handleLogin(){
  errorMessage.value=''
  if (!username.value.trim()){
    errorMessage.value='用户名不能为空'
  }
  else if (!password.value.trim()){
    errorMessage.value='密码不能为空'
  }else {
    try{
      const res=await api.post('api/user/account/login/',{
        username:username.value,
        password:password.value,
      })
      const data=res.data
      if (data.result==='success'){
        user.setAccessToken(data.access)
        user.setUserInfo(data)
        await router.push({
          name:'homepage-index'
        })
      }else {
        errorMessage.value=data.result
      }
    }catch (err){
      errorMessage.value='登录失败，请稍后重试'
    }
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card fade-up">
      <!-- Header -->
      <div class="auth-header">
        <div class="auth-icon">✦</div>
        <h1 class="auth-title text-display">欢迎回来</h1>
        <p class="auth-subtitle">登录你的AIFriends账号</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label class="form-label">用户名</label>
          <input
            v-model="username"
            type="text"
            autocomplete="username"
            class="input-elegant"
            placeholder="请输入用户名"
          />
        </div>

        <div class="form-group">
          <label class="form-label">密码</label>
          <input
            v-model="password"
            type="password"
            autocomplete="current-password"
            class="input-elegant"
            placeholder="请输入密码"
          />
        </div>

        <p v-if="errorMessage" class="error-msg fade-up">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {{ errorMessage }}
        </p>

        <button type="submit" class="btn-primary-custom auth-submit">
          <span>登录</span>
        </button>
      </form>

      <!-- Footer -->
      <div class="auth-footer">
        <span class="auth-footer-text">还没有账号？</span>
        <RouterLink :to="{name:'user-account-register-index'}" class="auth-link">
          立即注册
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 4rem);
  padding: 2rem 1rem;
}

.auth-card {
  width: 100%;
  max-width: 24rem;
  background: var(--c-glass);
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  border: 1px solid var(--c-glass-border);
  border-radius: var(--r-xl);
  padding: 2.5rem 2rem;
  box-shadow:
    0 2px 8px var(--c-shadow),
    0 12px 40px var(--c-shadow-lg);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-icon {
  font-size: 2rem;
  color: var(--c-accent);
  margin-bottom: 0.75rem;
  filter: drop-shadow(0 0 10px rgba(108, 92, 231, 0.3));
}

.auth-title {
  font-size: 1.5rem;
  color: var(--c-ink);
  margin: 0 0 0.375rem;
}

.auth-subtitle {
  font-size: 0.9rem;
  color: var(--c-ink-muted);
  margin: 0;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-ink-soft);
}

.error-msg {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.85rem;
  color: var(--c-rose);
  margin: 0;
  padding: 0.5rem 0.75rem;
  background: rgba(244, 63, 94, 0.06);
  border-radius: var(--r-sm);
}

.auth-submit {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(108, 92, 231, 0.06);
}

.auth-footer-text {
  font-size: 0.85rem;
  color: var(--c-ink-muted);
}

.auth-link {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-accent);
  text-decoration: none;
  transition: opacity 0.2s;
}

.auth-link:hover {
  opacity: 0.7;
}
</style>
