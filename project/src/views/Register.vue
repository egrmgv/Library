<template>
<div class="flex items-center justify-center bg-white ">
    <div class="bg-emerald-200 shadow-sm border border-gray-900 rounded-lg max-w-md w-full p-8">
        <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-white">Создать аккаунт</h2>
        </div>
        <form @submit.prevent ="handleRegister" class="space-y-3">
            <div>
                <label class="block text-sm font-bold text-white mb-2">Введите имя</label>
                <input
                v-model="formData.username"
                type="text"
                required
                placeholder="Имя"
                class="w-full px-4 py-3 rounded-xl border border-black focus:border-emerald-500"
                >
            </div>
            <div>
                <label class="block text-sm font-bold text-white mb-2">Введите почту</label>
                <input
                v-model="formData.email"
                type="text"
                required
                placeholder="Почта"
                class="w-full px-4 py-3 rounded-xl border border-black focus:border-emerald-500"
                >
            </div>
            <div>
                <label class="block text-sm font-bold text-white mb-2">Введите пароль</label>
                <input
                v-model="formData.password"
                type="text"
                required
                placeholder="Пароль"
                class="w-full px-4 py-3 rounded-xl border border-black focus:border-emerald-500"
                >
            </div>
            <div class="flex justify-center">
            <button type="submit" class=" rounded-full bg-black font-bold text-[15px]
             text-white px-8 py-4 mt-3 hover:bg-white hover:text-black active:bg-gray-500 active:text-white">
                Зарегистрироваться
            </button>
            </div>
            <div class="flex justify-center">
                <router-link to="/login" class="text-black text-[15px] underline mt-5">Есть аккаунт? Войдите </router-link>
            </div>
        </form>
        
    </div>
</div>
</template>
<script setup>
    import { reactive } from 'vue';
    import api from '@/api';
    const formData = reactive({
        username: '',
        email: '',
        password: ''
    })

    const handleRegister = async () => {
        // Просто говорим "отправь на /auth/register"
  // Axios сам добавит http://localhost:8080/api спереди
        const response = await api.post('/auth/register', formData);
        console.log(response.data)
    }

</script>