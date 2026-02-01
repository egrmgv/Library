<!-- src/views/AddBook.vue --> 
<template>
  <div class="max-w-2xl mx-auto">
    <button @click="$router.push('/')" class="mb-4 text-emerald-600 hover:text-emerald-800 flex items-center gap-2 transition-colors">
      ← Вернуться в библиотеку
    </button>

    <div class="bg-white border border-emerald-500 rounded-xl shadow-lg p-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Добавить новую книгу</h1>
      
      <form @submit.prevent class="space-y-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Название книги</label>
          <input type="text" placeholder="Например: Война и мир" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Автор</label>
            <input type="text" placeholder="Лев Толстой" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Год издания</label>
            <input type="number" placeholder="1869" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Жанр</label>
            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
              <option value="classic">Классика</option>
              <option value="thriller">Триллер</option>
              <option value="fantasy">Фэнтези</option>
              <option value="science">Научпоп</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Страниц</label>
            <input type="number" placeholder="300" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Ссылка на обложку (URL)</label>
          <input type="text" placeholder="https://example.com/cover.jpg" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
        </div>

        <div class="pt-4">
          <button class="w-full bg-emerald-500 text-white font-bold py-3 rounded-lg hover:bg-emerald-600 active:bg-black transition-colors duration-300 shadow-md">
            Сохранить в библиотеку
          </button>
        </div>
      </form>
    </div>
  </div>
</template>