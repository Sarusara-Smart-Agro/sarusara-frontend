import type { AxiosInstance } from "axios";
import axios from "axios";

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})

export default api;