import { AppShell, Container, Paper, useMantineTheme } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Header from '@components/header/Header'
import classes from './styles/layout.module.css'
import { useMediaQuery } from '@mantine/hooks'

export default function Layout() {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return (
    <AppShell header={{ height: isMobile ? 72 : 98 }} withBorder={false} style={{ backgroundColor: 'gray' }}>
      <AppShell.Header className={classes.header}>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Container h="inherit" size="xl">
          <Paper radius="md" p="xl" my="xl" mih={500}>
            <Outlet />
          </Paper>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
