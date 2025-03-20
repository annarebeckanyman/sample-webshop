import logo from '@assets/logo.png'
import { Burger, Container, Drawer, Flex, Image, Stack, Text, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { toggleMobileMenu } from '@store/slices/uiSlice'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartButton from './components/CartButton'
import classes from './styles/header.module.css'

const links = [
  { path: '/', label: 'Products' },
  { path: '/contact', label: 'Contact' },
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
      <Text className={classes.menuLink}>{item.label}</Text>
    </Link>
  )

  const logoLink = (
    <Link to="/" className={classes.link}>
      <Image src={logo} alt="Bookstore" h={isMobile ? 55 : 80} />
    </Link>
  )

  const cartLink = (
    <Link to="/checkout" onClick={() => handleLinkClick('/checkout')} className={classes.link}>
      <CartButton />
    </Link>
  )

  const menuLinks = links.map(renderMenuLink)

  return (
    <Container h="100%" size="xl">
      <nav className={classes.navWrapper}>
        <Flex h="inherit" align="center" justify="space-between">
          {isMobile ? (
            <>
              {logoLink}
              <Burger opened={showMobileMenu} onClick={toggleDrawer} aria-label="Show menu" />
            </>
          ) : (
            <>
              <Flex align="center" gap="xl">
                {logoLink}
                {menuLinks}
              </Flex>
              {cartLink}
            </>
          )}
        </Flex>
      </nav>
      <Drawer opened={showMobileMenu} onClose={toggleDrawer} position="right" size="100%" padding="xl">
        <Stack gap="lg" mb="xl">
          {menuLinks}
        </Stack>
        {cartLink}
      </Drawer>
    </Container>
  )
}
