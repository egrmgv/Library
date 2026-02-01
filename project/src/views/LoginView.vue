<template>
    <div class="flex items-center justify-center bg-white ">
    <div class="bg-emerald-200 shadow-sm border border-gray-900 rounded-lg max-w-md w-full p-8">
        <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-white">Авторизация</h2>
        </div>
        <form @submit.prevent ="handleLogin" class="space-y-3">
            <div>
                <label class="block text-sm font-bold text-white mb-2">Введите почту</label>
                <input
                v-model="loginData.email"
                type="text"
                required
                placeholder="Почта"
                class="w-full px-4 py-3 rounded-xl border border-black focus:border-emerald-500"
                >
            </div>
            <div>
                <label class="block text-sm font-bold text-white mb-2">Введите пароль</label>
                <input
                v-model="loginData.password"
                type="text"
                required
                placeholder="Пароль"
                class="w-full px-4 py-3 rounded-xl border border-black focus:border-emerald-500"
                >
            </div>
            <div class="flex justify-center">
            <button type="submit" class="w-52 rounded-full bg-black font-bold text-[15px]
             text-white px-5 py-4 mt-3 hover:bg-white hover:text-black
             active:bg-gray-500 active:text-white">
                Войти
            </button>
            </div>
        </form>
        
    </div>
</div>
</template>
<script setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';
    const router = useRouter();
    const authStore = useAuthStore(); // Создаем экземпляр стора
    import api from '@/api'
    const loginData = reactive({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        try {
        const response = await api.post('/auth/login', loginData);
        console.log('Ответ сервера:', response.data);

        // ШАГ СОХРАНЕНИЯ: Кладем данные из ответа Java в Pinia
        authStore.setUser(response.data);
        alert(`С возвращением, ${response.data.username}!`);
        router.push('/catalog'); 
    } catch (error) {
        alert('Ошибка входа. Проверь почту и пароль.');
    }
    }

</script>