<template>
  <div class="max-w-xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">ADD TASK TO THE DOOMLIST</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input
        v-model="newTask"
        type="text"
        placeholder="Enter task..."
        class="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500"
      />
      <button
        type="submit"
        class="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded shadow"
      >
        Add Task
      </button>
    </form>

    <router-link
      to="/"
      class="block mt-6 text-center text-gray-400 hover:text-gray-200"
    >
      ← Back to list
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todoStore.js'

const newTask = ref('')
const todoStore = useTodoStore()
const router = useRouter()

function handleSubmit() {
  if (newTask.value.trim()) {
    todoStore.addTask(newTask.value.trim())
    newTask.value = ''
    router.push('/')
  }
}
</script>
