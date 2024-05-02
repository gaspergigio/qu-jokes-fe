import { Text, Image } from '@mantine/core'
import { JokeModalPunchlineProps } from './JokeModal.types'

/**
 * Renders the JokeModalPunchline component.
 *
 * @param {JokeModalPunchlineProps} punchline - The punchline to be displayed.
 * @param {JokeModalPunchlineProps} jokeMeme - The joke meme to be displayed.
 * @return {JSX.Element} The rendered JokeModalPunchline component.
 */
export default function JokeModalPunchline({ punchline, jokeMeme }: JokeModalPunchlineProps) {
  return (
    <>
      <Text fz="lg" fw="bold" mb="xl">
        {punchline}
      </Text>
      <Image radius="md" w="100%" src={jokeMeme} />
    </>
  )
}
