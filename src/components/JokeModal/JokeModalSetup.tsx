import { Box, Button, Text } from '@mantine/core'
import { IconMoodHappyFilled } from '@tabler/icons-react'
import { JokeModalSetupProps } from './JokeModal.types'

/**
 * Renders a modal component that displays a joke setup.
 *
 * @param {JokeModalSetupProps} props - The props object containing the joke setup and click event handler.
 * @param {string} props.setup - The joke setup to be displayed.
 * @param {() => void} props.onClick - The event handler for when the button is clicked.
 * @return {JSX.Element} The rendered modal component with the joke setup and button.
 */
export default function JokeModalSetup({ setup, onClick }: JokeModalSetupProps) {
  return (
    <Box>
      <Text fz="lg" fw="bold" mb="xl">
        {setup}
      </Text>
      <Button
        justify="center"
        onClick={onClick}
        fullWidth
        rightSection={<IconMoodHappyFilled />}
        variant="default"
        mt="md">
        Click to see the answer
      </Button>
    </Box>
  )
}
