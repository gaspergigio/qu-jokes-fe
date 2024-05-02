import { Joke } from '@/data/types'

export type JokeListProps = {
  jokes: Joke[]
  isLoading: boolean
  onClick: () => void
}
