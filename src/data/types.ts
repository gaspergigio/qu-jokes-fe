import { JOKE_TYPES } from '@/configs'

export type Joke = {
  type: string
  setup: string
  punchline: string
  id: number
}

export type JokeFilterArgs = {
  page?: number
  type?: string
}

export type JokeSortOptions = {
  field: string
  direction: string
}

export type JokeTypeColorMap = {
  [key in keyof typeof JOKE_TYPES]: string
}
