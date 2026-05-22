<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, useTemplateRef } from "vue"
import api, { BASE_URL, resolveMediaUrl } from "@/js/http/api.js"
import { useUserStore } from "@/stores/user.js"
import Vditor from "vditor"
import "vditor/dist/index.css"

const blogs = ref([])
const itemsCount = ref(0)
const editingId = ref(null)
const submitting = ref(false)

const editTitle = ref("")
const editContent = ref("")
const editTags = ref("")
const editCover = ref(null)
const editCoverUrl = ref("")
const loading = ref(false)
const hasMore = ref(true)
const sentinelRef = useTemplateRef("sentinel-ref")

let vditor = null   // 只维护一个实例
let coverObjectUrl = null
let observer = null

function revokeCoverObjectUrl() {
  if (!coverObjectUrl) return
  URL.revokeObjectURL(coverObjectUrl)
  coverObjectUrl = null
}

function handleSelectFile(e) {
  const file = e.target.files[0]
  if (!file) return

  editCover.value = file
  revokeCoverObjectUrl()
  coverObjectUrl = URL.createObjectURL(file)
  editCoverUrl.value = coverObjectUrl
}




async function loadMore() {
  if (loading.value || !hasMore.value) return
  loading.value = true
  try {
    const res = await api.get("api/blog/my_list/", {
      params: { items_count: itemsCount.value },
    })
    if (res.data.result === "success") {
      blogs.value.push(...res.data.blogs)
      itemsCount.value += res.data.blogs.length
      if (res.data.blogs.length < 20) hasMore.value = false
    }
  } finally {
    loading.value = false
  }
}

// 🚀 进入编辑
async function startEdit(blog) {
  revokeCoverObjectUrl()
  editingId.value = blog.id
  editTitle.value = blog.title
  editContent.value = blog.content
  editTags.value = blog.tags.join(",")
  editCover.value = null
  editCoverUrl.value = blog.cover_photo

  // 等 DOM 渲染出来
  await nextTick()

  // 销毁旧实例
  vditor?.destroy()

  // 创建新编辑器
  vditor = new Vditor(`vditor-${blog.id}`, {
    height: 400,
    mode: "sv",
    placeholder: "编辑你的博客内容...",

    after: () => {
      vditor.setValue(editContent.value) // 回显内容
    },

    input: (value) => {
      editContent.value = value
    },

    upload: {
      url: `${BASE_URL}/api/upload/image/`,
      fieldName: "file",
      headers: {
        Authorization: "Bearer " + useUserStore().accessToken,
      },
    },
  })
}
async function remove(id) {
  try {
    const res = await api.post("api/blog/remove/", {
      blog_id: id,
    })

    if (res.data.result === "success") {
      blogs.value = blogs.value.filter(b => b.id !== id)
    } else {
      alert(res.data.result)
    }
  } catch (err) {
    alert("删除失败，请稍后重试")
  }
}

function cancelEdit() {
  editingId.value = null
  editCover.value = null
  editCoverUrl.value = ""
  revokeCoverObjectUrl()
  vditor?.destroy()
  vditor = null
}

// 🚀 提交
async function submitEdit(id) {
  if (submitting.value) return
  submitting.value = true

  try {
    const markdown = vditor?.getValue() || ""

    const formData = new FormData()
    formData.append("blog_id", id)
    formData.append("title", editTitle.value)
    formData.append("content", markdown)

    editTags.value.split(",").forEach((t) => {
      if (t.trim()) formData.append("tags", t.trim())
    })

    if (editCover.value) formData.append("cover_photo", editCover.value)

    const res = await api.post("api/blog/update/", formData)

    if (res.data.result === "success") {
      const index = blogs.value.findIndex((b) => b.id === id)

      if (index >= 0) {
        blogs.value[index] = {
          ...blogs.value[index],
          title: editTitle.value,
          content: markdown,
          tags: editTags.value.split(",").map(t => t.trim()).filter(Boolean),
          cover_photo: res.data.cover_photo,
        }
      }
      editingId.value = null
      revokeCoverObjectUrl()
      vditor?.destroy()
      vditor = null
    } else {
      alert(res.data.result)
    }
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  await loadMore()
  observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) loadMore()
  })
  if (sentinelRef.value) observer.observe(sentinelRef.value)
})
onBeforeUnmount(() => {
  observer?.disconnect()
  revokeCoverObjectUrl()
  vditor?.destroy()
  vditor = null
})
</script>

<template>
  <div class="page-container">
    <h1 class="text-3xl font-bold mb-10 handwritten-content">管理我的博客</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="blog in blogs" :key="blog.id" class="glass-card flex flex-col overflow-hidden">

        <div v-if="editingId === blog.id" class="p-6 space-y-4">
          <label class="relative block h-48 group cursor-pointer">
            <img v-if="editCoverUrl" :src="resolveMediaUrl(editCoverUrl)" class="w-full h-full object-cover rounded-xl border-2 border-dashed border-primary/20" />
            <div v-else class="w-full h-full rounded-xl border-2 border-dashed border-primary/20 bg-base-200"></div>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition rounded-xl">
              <span class="text-white">点击更换预览</span>
            </div>
            <input type="file" class="hidden" accept="image/*" @change="handleSelectFile" />
          </label>
          <input v-model="editTitle" class="input input-bordered w-full handwritten-content font-bold" />
          <div :id="`vditor-${blog.id}`" class="w-full"></div>
          <input
            v-model="editTags"
            placeholder="标签（用逗号分隔，如：生活,旅行,随笔）"
            class="input input-bordered w-full handwritten-content"
          />
          <div class="flex justify-end gap-2">
            <button class="btn btn-ghost btn-sm" @click="cancelEdit">取消</button>
            <button class="btn btn-primary btn-sm" @click="submitEdit(blog.id)" :disabled="submitting">保存</button>
          </div>
        </div>

        <div v-else class="flex flex-col h-full">
          <img v-if="blog.cover_photo" :src="resolveMediaUrl(blog.cover_photo)" class="h-48 w-full object-cover" />
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="text-xl font-bold mb-2 handwritten-content">{{ blog.title }}</h2>
            <p class="line-clamp-3 text-sm opacity-80 mb-4 flex-1 handwritten-content">{{ blog.content }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in blog.tags"
                :key="tag"
                class="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
              >
                #{{ tag }}
              </span>
            </div>
            <div class="flex gap-2 justify-end mt-4">
              <button class="btn btn-outline btn-primary btn-sm" @click="startEdit(blog)">编辑</button>
              <button class="btn btn-outline btn-error btn-sm" @click="remove(blog.id)">删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="sentinel-ref" class="h-20 flex items-center justify-center">
      <span v-if="loading" class="loading loading-dots loading-lg text-primary"></span>
    </div>
  </div>
</template>
