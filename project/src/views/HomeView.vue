<!-- src/views/HomeView.vue -->
<template>
  <div>
    <h1 class="font-bold text-2xl mb-6">Ваша библиотека</h1>
    <div class="books-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      />
        </div>
        </div>
</template>

<script setup>
  import { ref } from 'vue';
  import BookCard from '@/components/BookCard.vue'
  const books = ref([
    {
      id: 1,
      title: 'Война и мир',
      genre: 'Триллер',
      year: 1869,
      rating: 4,
      author: 'Лев Толстой',
      number_of_pages: 1400,
      status: 'Прочитано'
    },
    {
      id: 2,
      title: 'Мастер и Маргарита',
      genre: 'Триллер',
      year: 1967,
      rating: 5,
      author: 'Михаил Булгаков',
      number_of_pages: 1100,
      status: 'Читает'
    },
    {
      id: 3,
      title: 'Война и мир',
      genre: 'Триллер',
      year: 1984,
      rating: 4,
      author: 'Джордж Оруэлл',
      number_of_pages: 900,
      status: 'Хочу прочитать'
    }
  ])
</script>
