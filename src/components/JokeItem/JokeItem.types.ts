import { Joke } from '@/data/types'

export type JokeItemsProps = {
  joke: Joke
  onClick: (id: number) => void
}
