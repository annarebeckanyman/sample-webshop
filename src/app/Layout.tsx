import { AppShell, Container, useMantineTheme } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Header from '@components/header/Header'
import { useMediaQuery } from '@mantine/hooks'

export default function Layout() {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return (
    <AppShell header={{ height: isMobile ? 90 : 150 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Container h="inherit" size="xl" pt={isMobile ? 50 : 100} pb="xl">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
