<template>
  <div class="w-full max-w-xl flex flex-col items-center">
    <ul class="space-y-3 w-full ">
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
      class="mt-8 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded shadow px-4"
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
