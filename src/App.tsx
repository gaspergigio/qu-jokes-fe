import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import { Providers, Shell } from '@/containers'

export default function App() {
  return (
    <Providers>
      <Shell />
    </Providers>
  )
}
