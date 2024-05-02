import { Flex, Image, Text } from '@mantine/core'
import NoDataLogo from '@/assets/img/no-data.webp'
import { memo } from 'react'
import { NoDataProps } from './NoData.types'

/**
 * Renders a component to display when there is no data available.
 *
 * @param {string} props.title - The title to display.
 * @param {string} [props.description] - The optional description to display.
 * @return {JSX.Element} The rendered component.
 */
function NoData({ title, description }: NoDataProps) {
  return (
    <Flex direction="column" mt={100} justify="center" align="center" h="100%">
      <Image w={120} radius={120} src={NoDataLogo} alt="No Data" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {title}
      </Text>
      {description && (
        <Text ta="center" c="dimmed" fz="sm">
          {description}
        </Text>
      )}
    </Flex>
  )
}

export default memo(NoData)
