//src/stores/auth.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null) // Здесь будет лежать объект пользователя

  function setUser(userData) {
    user.value = userData
  }

  function logout() {
    user.value = null
    localStorage.removeItem('token') // Очищаем память при выходе
  }

  return { user, setUser, logout }
})