import { Image } from '@mantine/core'
import { memo } from 'react'
/* import classes from './Header.module.css' */

/**
 * Renders the Header component.
 *
 * @return {JSX.Element} The rendered Header component.
 */
function Header() {
  return (
    <Image
      radius="md"
      mt={10}
      ml={10}
      h={60}
      w={100}
      src="https://images7.bamboohr.com/570949/logos/cropped.jpg?v=28"
    />
  )
}

export default memo(Header)
