import axios from '@/utils/axios'

interface UserHiResponse {
  message: string
  react?: string
}

export const userHi = (): Promise<UserHiResponse> => {
  return axios.get('user/hi')
}
