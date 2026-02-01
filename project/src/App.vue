<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <NavigationBar  v-if="!['/register', '/login'].includes(route.path)"/>

    <main class="flex-1 container mx-auto px-4 py-6">
      <router-view/>
    </main>

    <footer v-if="$route.path !== '/register'" class="bg-white border-t mt-8 py-6 text-center text-gray-600 text-sm">
      <p>
        Умная библиотека • {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

</script>
