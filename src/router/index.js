import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '@/views/TaskListView.vue'
import AddTaskView from '@/views/AddTaskView.vue'

const routes = [
    { path: '/', component: TaskListView, meta: { title: 'Doomlist - Home' } },
    { path: '/add', component: AddTaskView, meta: { title: 'Doomlist - Add new task' } }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Doomlist';
    next();
});

export default router
