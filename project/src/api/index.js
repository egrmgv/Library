import axios from "axios";

const api = axios.create({
    baseURL: 'https://smart-library-production-30b.up.railway.app',
})

export default api