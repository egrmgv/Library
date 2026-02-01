<!-- src/components/HomeView.vue -->
<template>
  <div class="border-4 border-emerald-300 rounded-lg 
  shadow-md p-4 bg-white
   transition-all hover:shadow-lg">
   <div class="aspect-[3/4] bg-gray-100 rounded-lg mb-4 
   flex items-center justify-center border-2
   border-double border-gray-300">
   <span class="text-gray-400 text-xs px-2">Обложка книги</span>
  </div>
  <div class="mb-4">
    <h3 class="font-bold text-lg text-gray-800 leading-tight mb-1">
      {{ book.title }}
    </h3>
    <p class="text-sm text-gray-700">
      {{ book.author }} • {{ book.year }}
    </p>
  </div>
  <div class="flex items-center justify-between mt-auto">
    <div class="text-yellow-400 font-bold">
      <span class="text-lg text-gray-900 mr-2">Рейтинг:</span>{{ '★'.repeat(book.rating) }}{{ '☆'.repeat(5 - book.rating) }} 
    </div>
    <span class="text-[10px] font-bold uppercase
     px-2 py-1 bg-emerald-100
     text-gray-800 rounded border">
      {{ book.status }}
    </span>
  </div>
  <button class="w-full mt-4 bg-emerald-500 text-[10px] text-gray-900 text-sm 
  rounded-full px-4 py-2
   hover:bg-black hover:text-white transition-colors shrink-0">Подробнее</button>

   <div class="flex text-gray-900 justify-between items-center mt-4">
    <span class=" font-bold ">Количество страниц: </span> <span class="text-sm mr-6">{{ book.number_of_pages }}</span>
    <span class=" font-bold">Жанр:</span> <span class="text-sm ml-2"> {{ book.genre }}</span>
   </div>

  </div>
</template>
<script setup>
  defineProps ({
    book: {
      type: Object,
      required: true
    }
  })
</script>
