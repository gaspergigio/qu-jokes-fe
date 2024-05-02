import { Card, Text, Badge, Box } from '@mantine/core'
import classes from './JokeItem.module.css'
import { memo } from 'react'
import { JOKE_TYPES, JOKE_TYPE_COLORS } from '@/configs'
import { JokeItemsProps } from './JokeItem.types'

/**
 * Renders a JokeItem component with the joke setup and type badge.
 *
 * @param {JokeItemsProps} joke - The joke object containing setup and type.
 * @param {JokeItemsProps} onClick - The event handler for when the item is clicked.
 * @return {JSX.Element} The rendered JokeItem component.
 */
function JokeItem({ joke, onClick }: JokeItemsProps) {
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="md" onClick={() => onClick(joke.id)}>
      <Box className={classes.cardTitleBox} my="md">
        <Text fz="lg" fw={500}>
          {joke.setup}
        </Text>
      </Box>
      <Badge
        variant="filled"
        color={joke.type in JOKE_TYPES ? JOKE_TYPE_COLORS[joke.type as keyof typeof JOKE_TYPES] : 'gray'}>
        {joke.type}
      </Badge>
    </Card>
  )
}

export default memo(JokeItem)
