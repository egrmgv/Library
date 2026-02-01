import { createRouter, createWebHistory } from 'vue-router'
// Импортируем твои страницы
import HomeView from '@/views/HomeView.vue'
import Register from '@/views/Register.vue'
import LoginView from '@/views/LoginView.vue'
import BookCatalog from '@/views/BookCatalog.vue'

const routes = [
  {
    path: '/', 
    name: 'home',
    component: HomeView // Главная страница
  },
  {
    path: '/register',
    name: 'register',
    component: Register // Окно регистрации
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView // Получения логина
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: BookCatalog // Каталог книг
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router