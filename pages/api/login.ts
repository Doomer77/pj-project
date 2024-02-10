import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export interface User {
  user: { token: string }
}

const $login = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
})

export const login = async (email: string, password: string): Promise<User> => {
  const { data } = await $login.post<User>(`/users/login`, {
    user: { email, password },
  })
  localStorage.setItem('token', data.user.token)
  return jwtDecode(data.user.token)
}
