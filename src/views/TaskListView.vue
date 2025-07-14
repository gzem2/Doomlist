<template>
  <div class="w-full max-w-xl flex flex-col items-center pt-4">
    <ul class="space-y-3 w-full">
      <TaskItem
        v-for="task in todoStore.tasks"
        :key="task.id"
        :task="task"
        @toggle="todoStore.toggleTask"
        @delete="todoStore.deleteTask"
        />
    </ul>
    
    <router-link
      to="/add"
      class="mt-8 bg-[var(--accent)] hover:bg-[var(--accent-saturated)] text-white py-2 rounded shadow px-4"
      >
      + Add Task
    </router-link>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todoStore.js'
import TaskItem from '@/components/TaskItem.vue'

const todoStore = useTodoStore()
</script>
