<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue"
import api, { BASE_URL } from "@/js/http/api.js"
import { useRouter } from "vue-router"
import { useUserStore } from "@/stores/user.js"
import Vditor from "vditor"
import "vditor/dist/index.css"

const router = useRouter()

const title = ref("")
const content = ref("")
const tags = ref("")
const cover = ref(null)
const submitting = ref(false)
const errorMessage = ref("")

let vditor = null

// 🚀 初始化编辑器
onMounted(() => {
  vditor = new Vditor("vditor", {
    height: 500, // ✅ 更合适的编辑高度
    minHeight: 400,
    placeholder: "开始创作你的博客内容...",

    mode: "sv", // sv 分屏（推荐）

    toolbarConfig: {
      pin: true, // 工具栏固定
    },

    cache: {
      enable: false, // 避免缓存干扰
    },

    // ✅ 初始化内容（用于编辑回显）
    after: () => {
      vditor.setValue(content.value)
    },

    // ✅ 实时同步内容
    input: (value) => {
      content.value = value
    },

    // 🚀 图片上传（对接 Django）
    upload: {
      url: `${BASE_URL}/api/upload/image/`,
      fieldName: "file",
      headers: {
        Authorization: "Bearer " + useUserStore().accessToken,
      },
    },
  })
})

onBeforeUnmount(() => {
  vditor?.destroy()
})

// 🚀 提交
async function submit() {
  const markdown = vditor?.getValue() || ""

  if (!title.value || !markdown) {
    errorMessage.value = "请填写标题和正文"
    return
  }

  if (!cover.value) {
    errorMessage.value = "请上传封面照片"
    return
  }

  if (submitting.value) return
  submitting.value = true
  errorMessage.value = ""

  const formData = new FormData()
  formData.append("title", title.value)
  formData.append("content", markdown)

  tags.value.split(",").forEach((t) => {
    if (t.trim()) formData.append("tags", t.trim())
  })

  if (cover.value) formData.append("cover_photo", cover.value)

  try {
    const res = await api.post("/api/blog/create/", formData)
    if (res.data.result === "success") {
      router.push({ name: "blog-index" })
    } else {
      errorMessage.value = res.data.result
    }
  } catch (err) {
    errorMessage.value = "发布失败，请稍后重试"
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="page-container flex justify-center px-4">
    <!-- ✅ 宽度加大 -->
    <div class="glass-card w-full max-w-3xl p-6 rounded-2xl shadow-xl">
      <h1 class="text-xl font-semibold mb-6 text-center handwritten-content text-primary">
        写下你的博客
      </h1>

      <div class="space-y-6">
        <!-- 标题 -->
        <input
          v-model="title"
          class="input w-full text-lg border-0 border-b border-gray-200 focus:border-gray-400 focus:ring-0 rounded-none px-0 py-2 handwritten-content"
          placeholder="输入标题..."
        />

        <!-- 🚀 编辑器（核心） -->
        <div id="vditor" class="w-full"></div>

        <!-- 标签 -->
        <div class="form-control">
          <label class="label">
            <span class="label-text text-sm text-gray-600">标签</span>
          </label>
          <input
            v-model="tags"
            class="input input-bordered w-full text-sm"
            placeholder="生活, 科技, 旅行"
          />
        </div>

        <!-- 封面 -->
        <div class="form-control">
          <label class="label">
            <span class="label-text text-sm text-gray-600">封面照片</span>
          </label>
          <input
            type="file"
            accept="image/*"
            @change="e => cover = e.target.files[0]"
            class="file-input file-input-bordered file-input-primary w-full text-sm"
          />
        </div>

        <p v-if="errorMessage" class="text-sm text-red-500">{{ errorMessage }}</p>

        <!-- 提交 -->
        <button
          class="btn btn-primary w-full text-base shadow-md shadow-primary/20"
          @click="submit"
          :disabled="submitting"
        >
          <span v-if="submitting" class="loading loading-spinner"></span>
          发布博客
        </button>
      </div>
    </div>
  </div>
</template>
