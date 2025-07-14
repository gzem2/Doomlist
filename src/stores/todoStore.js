import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('doomlist-tasks')) || []
  }),
  actions: {
    addTask(title) {
      const newTask = {
        id: Date.now(),
        title,
        done: false
      }
      this.tasks.push(newTask)
      this.saveTasksToLocalStorage() // Manually call after task addition
    },
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.done = !task.done
        this.saveTasksToLocalStorage() // Manually call after task toggling
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.saveTasksToLocalStorage() // Manually call after task deletion
    },

    // Save tasks to localStorage manually
    saveTasksToLocalStorage() {
      localStorage.setItem('doomlist-tasks', JSON.stringify(this.tasks))
    }
  }
})
