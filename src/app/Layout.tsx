import { AppShell, Container, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import classes from './styles/layout.module.css'

export default function Layout({ children }: PropsWithChildren) {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return (
    <AppShell header={{ height: isMobile ? 90 : 150 }} footer={{ height: 80 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Container size="xl" h="inherit" pt={isMobile ? 50 : 100} pb="xl">
          {children || <Outlet />}
        </Container>
      </AppShell.Main>
      <AppShell.Footer className={classes.footer}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
