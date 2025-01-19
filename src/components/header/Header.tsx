import { Burger, Container, Drawer, Flex, Stack, useMantineTheme, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { toggleMobileMenu } from '@store/slices/uiSlice'
import classes from './styles/header.module.css'

const links = [
  { path: '/', label: 'Start' },
  { path: '/butiken', label: 'Butiken' },
  { path: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const { showMobileMenu } = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  const [activeTab, setActiveTab] = useState('/')

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [])

  const toggleDrawer = () => {
    dispatch(toggleMobileMenu(!showMobileMenu))
  }

  const handleLinkClick = (path: string) => {
    if (showMobileMenu) {
      dispatch(toggleMobileMenu(false))
    }
    setActiveTab(path)
  }

  const renderMenuLink = (item: { path: string; label: string }) => (
    <Link
      to={item.path}
      key={item.label}
      {...(item.path === activeTab && { 'data-active': true })}
      onClick={() => handleLinkClick(item.path)}
      className={classes.link}
    >
      <Text c={isMobile ? 'black' : 'white'} className={classes.linkText}>
        {item.label}
      </Text>
    </Link>
  )

  const logoLink = (
    <Link to="/" className={classes.link}>
      <Text c="white" className={classes.logoText}>
        Sample Webshop
      </Text>
    </Link>
  )

  const orderLink = (
    <Link to="/bestallning" onClick={() => handleLinkClick('/bestallning')} className={showMobileMenu ? classes.menuLink : ''}>
      {showMobileMenu ? <Text c="black">Varukorg</Text> : <FaShoppingBasket className={classes.orderIcon} />}
    </Link>
  )

  const menuLinks = links.filter((item) => !(item.label === 'Start' && !showMobileMenu)).map(renderMenuLink)

  return (
    <Container h="100%" size="xl">
      <nav className={classes.navWrapper}>
        <Flex h="inherit" align="center" justify="space-between">
          {isMobile ? (
            <>
              {logoLink}
              <Burger opened={showMobileMenu} onClick={toggleDrawer} aria-label="Visa meny" color="white" />
            </>
          ) : (
            <>
              <Flex align="center" gap="xl">
                {logoLink}
                {menuLinks}
              </Flex>
              {orderLink}
            </>
          )}
        </Flex>
      </nav>
      <Drawer opened={showMobileMenu} onClose={toggleDrawer} position="right" size="100%" padding="xl">
        <Stack gap="lg" mb="xl">
          {menuLinks}
        </Stack>
        {orderLink}
      </Drawer>
    </Container>
  )
}
