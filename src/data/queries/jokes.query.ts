import { useQuery } from 'react-query'
import { jokesKeys } from '@/data/key-factories'
import { Joke, JokeFilterArgs } from '../types'
import { API_URL } from '@/configs'

/**
 * Retrieves jokes based on the provided page and type filters.
 *
 * @param {JokeFilterArgs} page - The page number for pagination.
 * @param {JokeFilterArgs} type - The type of joke to filter by.
 * @return {Object} An object containing jokes data and additional metadata.
 */
export function useJokesQuery({ page = 1, type }: JokeFilterArgs) {
  const typeSegment = type ? `/${type}` : ''
  const jokes = useQuery(type ? jokesKeys.pageByType(page, type) : jokesKeys.page(page), async () => {
    const response = await fetch(`${API_URL}jokes${typeSegment}/ten`)
    const data = await response.json()
    return data
  })

  return {
    ...jokes,
    jokes: jokes.data as Joke[],
  }
}

/**
 * Retrieves a joke based on the provided id and type filters.
 *
 * @param {number} id - The id of the joke to retrieve.
 * @param {string} type - The type of joke to retrieve.
 * @return {Object} An object containing the retrieved joke, a function to refetch a random joke, and additional metadata.
 */
export function useJokeQuery(id?: number, type?: string) {
  const typeSegment = type ? `/${type}` : ''
  const joke = useQuery(
    id ? jokesKeys.findOne(id.toString()) : type ? jokesKeys.findRandomByType(type) : jokesKeys.findRandom(),
    async () => {
      const response = await fetch(id ? `${API_URL}jokes/${id}` : `${API_URL}jokes${typeSegment}/random`)
      const data = await response.json()
      const result = Array.isArray(data) ? data[0] : data
      return result
    }
  )

  const refetchRandomJoke = () => {
    joke.refetch({ queryKey: type ? jokesKeys.findRandomByType(type) : jokesKeys.findRandom() })
  }

  return {
    ...joke,
    refetchRandomJoke,
    joke: joke.data as Joke,
  }
}
