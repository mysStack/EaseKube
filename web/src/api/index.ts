import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_API_BASE || '/k8s-admin-api'

const http = axios.create({ baseURL: BASE_URL, timeout: 10000 })

http.interceptors.response.use(res => res.data, err => Promise.reject(err))

export default http