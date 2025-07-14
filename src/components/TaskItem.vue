<template>
  <li
    class="flex justify-between items-center bg-gray-800/60 border border-gray-700 backdrop-blur-sm px-4 py-2 rounded shadow hover:shadow-xl transition duration-200 max-w-1/2 mx-auto"
  >
    <div
      :class="{ 'line-through text-gray-500': task.done }"
      class="cursor-pointer flex-1"
      @click="$emit('toggle', task.id)"
    >
      {{ task.title }}
    </div>
    <button
      @click="$emit('delete', task.id)"
      class="text-red-400 hover:text-red-600 transition"
      aria-label="Delete task"
    >
      ✕
    </button>
  </li>
</template>

<script setup>
defineProps({
  task: Object
})
</script>
