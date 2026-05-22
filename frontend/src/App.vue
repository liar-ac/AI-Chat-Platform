<script setup>
import NavBar from "@/components/navbar/NavBar.vue";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user.js";
import api from "@/js/http/api.js";
import { useRoute, useRouter } from "vue-router";

const user = useUserStore()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  try {
    const refreshRes = await api.post('/api/user/account/refresh_token/', {})
    if (refreshRes.data?.access) {
      user.setAccessToken(refreshRes.data.access)
      const res = await api.get('/api/user/account/get_user_info/')
      if (res.data.result === 'success') {
        user.setUserInfo(res.data)
      }
    } else {
      user.logout()
    }
  } catch (err) {
    user.logout()
  } finally {
    user.setHasPulledUserInfo(true)
    if (route.meta.needLogin && !user.isLogin()) {
      router.replace({ name: 'user-account-login-index' })
    }
  }
})
</script>

<template>
  <div class="mesh-bg"></div>
  <NavBar>
    <RouterView />
  </NavBar>
</template>

<style scoped>
</style>
