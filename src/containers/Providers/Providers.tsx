import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from '@/configs'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Notifications } from '@mantine/notifications'
import { ReactNode } from 'react'
import { theme } from '@/theme'
import { DataProvider } from './DataProvider'

/**
 * Renders the Providers component, which wraps the application with necessary providers for state management, routing, and query caching.
 *
 * @param {ReactNode} props.children - The child components to be rendered within the Providers component.
 * @return {JSX.Element} The rendered Providers component.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <BrowserRouter>
          <DataProvider>
            <Notifications />
            {children}
          </DataProvider>
        </BrowserRouter>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
