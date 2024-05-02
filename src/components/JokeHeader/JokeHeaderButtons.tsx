import { ActionIcon, Button, Group, Tooltip } from '@mantine/core'
import { IconCaretLeft, IconMoodWink, IconMoodHappyFilled } from '@tabler/icons-react'
import { JokeHeaderButtonsProps } from './JokeHeader.types'
import { useAppContext } from '@/containers'

/**
 * Renders a component that displays buttons for pagination and random joke retrieval.
 *
 * @param {Object} paginationProps - An object containing the current page number, the function to change the page, and the total number of jokes.
 * @param {Function} onShowRandom - A function to retrieve a random joke.
 * @return {JSX.Element} The rendered component.
 */
export default function JokeHeaderButtons({ paginationProps, onShowRandom }: JokeHeaderButtonsProps) {
  const { openModal } = useAppContext()
  const { page, onPageChange, length } = paginationProps

  const handleOnClick = () => {
    onShowRandom()
    openModal(true)
  }

  return (
    <Group w={{ base: '100%', md: 'auto' }}>
      <Tooltip label="Back" color="dark" fz="xs">
        <ActionIcon
          disabled={page === 1}
          size="lg"
          variant="filled"
          aria-label="Back"
          onClick={() => onPageChange({ page: page - 1 })}>
          <IconCaretLeft stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Next" color="dark" fz="xs">
        <Button
          disabled={length < 10}
          variant="filled"
          w={{ base: '100%', md: 'auto' }}
          aria-label="Next"
          rightSection={<IconMoodWink stroke={1.5} />}
          onClick={() => onPageChange({ page: page + 1 })}>
          Give me more jokes!
        </Button>
      </Tooltip>
      <Tooltip label="Show random joke" color="dark" fz="xs">
        <Button
          onClick={handleOnClick}
          variant="filled"
          w={{ base: '100%', md: 'auto' }}
          aria-label="Next"
          rightSection={<IconMoodHappyFilled stroke={1.5} />}>
          Hit me with a joke
        </Button>
      </Tooltip>
    </Group>
  )
}
