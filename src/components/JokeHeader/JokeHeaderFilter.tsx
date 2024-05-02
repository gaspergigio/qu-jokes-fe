import { JOKE_TYPES } from '@/configs'
import { JokeFilterArgs } from '@/data/types'
import { Group, Select, Text } from '@mantine/core'

/**
 * Renders a filter component for the JokeHeader.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.onFilterChange - The callback function to be called when the filter changes.
 * @return {JSX.Element} The rendered JokeHeaderFilter component.
 */
export default function JokeHeaderFilter({ onFilterChange }: { onFilterChange: (filter: JokeFilterArgs) => void }) {
  return (
    <Group>
      <Text fz="sm">Filter by Type:</Text>
      <Select
        size="sm"
        placeholder="No Types"
        data={Object.keys(JOKE_TYPES)}
        clearable
        value={undefined}
        onChange={(e) => onFilterChange({ page: 1, type: e ?? '' })}
      />
    </Group>
  )
}
