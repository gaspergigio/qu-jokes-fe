import { Group, rem, Text, ActionIcon } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import classes from './Footer.module.css'
import { memo } from 'react'

/**
 * Renders the Footer component.
 *
 * @return {JSX.Element} The rendered Footer component.
 */

function Footer() {
  return (
    <div className={classes.inner}>
      <Text visibleFrom="sm" ml={40}>
        Jokes - QU Web Developer Challenge
      </Text>

      <Group gap="xs" justify="flex-end" wrap="nowrap">
        <Text>Alejandro Arribillaga</Text>
        <a href="https://www.linkedin.com/in/alejandroarribillaga" target="_blank">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </a>
        <a href="https://github.com/gaspergigio" target="_blank">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </a>
      </Group>
    </div>
  )
}

export default memo(Footer)
