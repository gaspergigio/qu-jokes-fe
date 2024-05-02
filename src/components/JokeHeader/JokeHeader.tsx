import { Group } from '@mantine/core'
import JokeHeaderButtons from './JokeHeaderButtons'
import JokeHeaderFilter from './JokeHeaderFilter'
import JokeHeaderSort from './JokeHeaderSort'
import { useAppContext } from '@/containers'

/**
 * Renders the JokeHeader component with children and sorting functionality.
 *
 * @param {React.ReactNode} children - The children components to render.
 * @return {JSX.Element} The rendered JokeHeader component.
 */

function JokeHeader({ children }: { children: React.ReactNode }) {
  const { sorting, setSorting } = useAppContext()

  return (
    <Group pb="lg" align="center" justify="space-between">
      {children}
      <JokeHeaderSort onSortChange={setSorting} sorting={sorting} />
    </Group>
  )
}

JokeHeader.Buttons = JokeHeaderButtons
JokeHeader.Filter = JokeHeaderFilter

export default JokeHeader
