import { AppShell, BackgroundImage, Container, Paper, useMantineTheme } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Header from '@components/header/Header'
import bgImage from '../assets/gard.jpg'
import classes from './styles/layout.module.css'
import { useMediaQuery } from '@mantine/hooks'

export default function Layout() {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return (
    <AppShell header={{ height: isMobile ? 72 : 98 }} withBorder={false}>
      <BackgroundImage src={bgImage} className={classes.bgImage}>
        <AppShell.Header className={classes.header}>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Container h="inherit" size="xl" mt="xl" mb="xl">
            <Paper radius="md" p="xl">
              <Outlet />
            </Paper>
          </Container>
        </AppShell.Main>
      </BackgroundImage>
    </AppShell>
  )
}
