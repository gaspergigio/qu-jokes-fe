import { ActionIcon, Group, Tooltip } from '@mantine/core'
import {
  IconSortAscendingLetters,
  IconSortDescendingLetters,
  IconSortAscendingShapes,
  IconSortDescendingShapes,
} from '@tabler/icons-react'
import { JokeHeaderSortProps } from './JokeHeader.types'

/**
 * Renders a component that displays buttons for sorting jokes by setup and type.
 *
 * @param {Object} onSortChange - A function to be called when the sorting changes.
 * @param {Object} sorting - An object containing the current sorting options.
 * @return {JSX.Element} The rendered component.
 */
export default function JokeHeaderSort({ onSortChange, sorting }: JokeHeaderSortProps) {
  const handleSortChange = (field: string) => {
    const newSort =
      !sorting || sorting.field !== field
        ? { field, direction: 'asc' }
        : { field, direction: sorting.direction === 'asc' ? 'desc' : 'asc' }
    onSortChange(newSort)
  }

  return (
    <Group gap="xs">
      <Tooltip label="Sort by setup" color="dark" fz="xs">
        <ActionIcon
          onClick={() => handleSortChange('setup')}
          variant={sorting?.field === 'setup' ? 'filled' : 'outline'}
          size="lg"
          aria-label="Sort by setup">
          {sorting?.direction === 'asc' ? (
            <IconSortAscendingLetters style={{ width: '70%', height: '70%' }} stroke={1.5} />
          ) : (
            <IconSortDescendingLetters style={{ width: '70%', height: '70%' }} stroke={1.5} />
          )}
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Sort by type" color="dark" fz="xs">
        <ActionIcon
          onClick={() => handleSortChange('type')}
          variant={sorting?.field === 'type' ? 'filled' : 'outline'}
          size="lg"
          aria-label="Sort by type">
          {sorting?.direction === 'asc' ? (
            <IconSortAscendingShapes style={{ width: '70%', height: '70%' }} stroke={1.5} />
          ) : (
            <IconSortDescendingShapes style={{ width: '70%', height: '70%' }} stroke={1.5} />
          )}
        </ActionIcon>
      </Tooltip>
    </Group>
  )
}
