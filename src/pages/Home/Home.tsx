import { JokeList, JokeHeader, JokeModal } from '@/components'
import { useAppContext } from '@/containers'
import { useJokesQuery, useJokeQuery } from '@/data/queries'
import { JokeFilterArgs } from '@/data/types'
import { useEffect } from 'react'

/**
 * Renders the Home component that displays a list of jokes, a header with pagination and filter options, and a modal for displaying a random joke.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  const { currentId, filter, openModal, setFilter } = useAppContext()
  const { jokes, isLoading } = useJokesQuery(filter)
  const { refetchRandomJoke } = useJokeQuery(currentId, filter.type)

  const handleFilterChange = (filter: JokeFilterArgs) => {
    setFilter((prev: JokeFilterArgs) => ({ ...prev, ...filter }))
  }

  useEffect(() => {
    if (currentId) openModal(true)
  }, [])

  return (
    <>
      <JokeHeader>
        <JokeHeader.Buttons
          paginationProps={{
            onPageChange: handleFilterChange,
            page: filter.page ?? 1,
            length: jokes && jokes.length,
          }}
          onShowRandom={refetchRandomJoke}
        />
        <JokeHeader.Filter onFilterChange={handleFilterChange} />
      </JokeHeader>
      <JokeList jokes={jokes} isLoading={isLoading} onClick={refetchRandomJoke} />
      <JokeModal />
    </>
  )
}
