import { AppShell, Container, rem } from '@mantine/core'
import { Footer, Header } from '@/components'
import AppRoutes from '@/routes/AppRoutes'

/**
 * Renders the main layout of the application using AppShell component.
 *
 * @return {JSX.Element} The main layout component
 */
export default function Shell() {
  return (
    <AppShell header={{ height: 80, offset: false }} footer={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(80)} + var(--mantine-spacing-md))`}>
        <Container>
          <AppRoutes />
        </Container>
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
