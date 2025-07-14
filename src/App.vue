<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTodoStore } from '@/stores/todoStore'
import { useLocalStorageSync } from '@/composables/useLocalStorageSync'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const todoStore = useTodoStore()

useLocalStorageSync(todoStore.tasks, 'doomlist-tasks')

const route = useRoute()
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50 bg-[var(--primary-light)] shadow-md flex justify-between items-center px-4 py-2">
    <router-link to="/">
      <h1 class="text-xl font-bold tracking-wide text-white">DOOMLIST</h1>
    </router-link>
    <router-link
      :to="route.path === '/add' ? '/' : '/add'"
      :class="[
              'w-10 h-10 rounded-full bg-[#a9b0b8] text-black flex items-center justify-center hover:bg-[#c0c0c0] transition',
              route.path === '/add' ? 'text-xl' : 'text-2xl'
              ]"
      >
      <span class="flex items-center justify-center pb-1">
        {{ route.path === '/add' ? '←' : '+' }}
      </span>
    </router-link>
  </div>
  
  <div class="pt-16 overflow-y-auto scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-[var(--primary)] h-[calc(100vh-4rem)] w-full">
    <div class="max-w-4xl mx-auto px-4 flex flex-col items-center">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
    
    .logo {
        margin: 0 2rem 0 0;
    }
    
    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
    
    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
