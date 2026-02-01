<!-- BookCatalog.vue -->
<template>
  <div class="min-h-screen bg-gray-50 py-10">
    <div class="max-w-5xl mx-auto px-4">
      
      <h1 class="text-3xl font-bold mb-8 text-center">
        Каталог книг
      </h1>

      <!-- Loading -->
      <div v-if="loading" class="text-center text-lg">
        Загрузка каталога...
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-red-500 text-center">
        {{ error }}
      </div>

      <!-- Books -->
      <div v-else class="space-y-6">
        <div
          v-for="book in books"
          :key="book.id"
          class="bg-white rounded-2xl shadow p-6 flex justify-between items-center hover:shadow-lg transition"
        >
          <div>
            <h2 class="text-xl font-bold mb-1">
              {{ book.title }}
            </h2>

            <p class="text-gray-700">
              {{ book.author }} · {{ book.year }}
            </p>

            <p class="text-gray-500 text-sm mt-1">
              {{ book.genre }} · {{ book.numberOfPages }} стр.
            </p>

            <p class="text-gray-400 text-sm italic mt-2">
              {{ book.name }}
            </p>
          </div>

          <button
            class="bg-emerald-500 text-white px-6 py-2 rounded-xl hover:bg-emerald-600 transition"
          >
            Подробнее
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const books = ref([])
const loading = ref(false)
const error = ref(null)

const fetchBooks = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await axios.get(
      'https://smart-library-production-30b.up.railway.app/books/catalog'
    )
    books.value = response.data.data
  } catch (err) {
    console.error(err)
    error.value = 'Не удалось загрузить каталог'
  } finally {
    loading.value = false
  }
}

onMounted(fetchBooks)
</script>

