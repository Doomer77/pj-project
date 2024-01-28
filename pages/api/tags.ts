import { Tag, TagListProps } from '@/components/shared/tag-list/props'
import axios from 'axios'

const $host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
})

export const getTags = async (): Promise<Tag[]> => {
  const { data } = await $host.get('/tags')
  return data
}
