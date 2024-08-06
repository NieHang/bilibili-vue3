import { message } from 'ant-design-vue'
import Axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

const axios = Axios.create({
  baseURL: '/api'
})

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.apiKey = import.meta.env.VITE_API_KEY
  return config
})

axios.interceptors.response.use((response) => {
  const { data: result } = response
  if (result?.code === 0) return result.data
  message.warning(result.message)
  return Promise.reject(result)
})

export default axios
