import { Grid } from '@mantine/core'
import JokeListSkeleton from './JokeList.skeleton'
import { JokeItem, NoData } from '@/components'
import { sortArray } from '@/configs'
import { useAppContext } from '@/containers'
import { JokeListProps } from './JokeList.types'

/**
 * Renders a list of jokes.
 *
 * @param {JokeListProps} props - The props object containing the jokes, isLoading flag, and onClick function.
 * @return {JSX.Element} The rendered list of jokes.
 */
export default function JokeList({ jokes, isLoading, onClick }: JokeListProps) {
  const { sorting, openModal, navigateFromRoot } = useAppContext()
  const xsValues = [4, 8, 6, 3, 3, 8, 4, 3, 3, 6]
  if (isLoading) return <JokeListSkeleton />

  const jokesSorted = sorting ? sortArray(jokes, sorting) : jokes

  const handleOnClick = (id?: number) => {
    onClick()
    navigateFromRoot(id)
    openModal(true)
  }

  return (
    <>
      {jokesSorted.length > 0 ? (
        <Grid>
          {jokesSorted.map((joke, index) => (
            <Grid.Col key={joke.id} span={{ base: 12, xs: xsValues[index] }}>
              <JokeItem joke={joke} onClick={handleOnClick} />
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <NoData title="No joke found" description="Try another search criteria." />
      )}
    </>
  )
}
