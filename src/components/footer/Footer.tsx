import { Flex, Text, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export default function Footer() {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return (
    <Flex h="inherit" align="center" justify="center" direction={isMobile ? 'column' : 'row'}>
      <Text size="xs">© 2025 Anna Nyman</Text>
      {!isMobile && (
        <Text size="xs" mx={5}>
          |
        </Text>
      )}
      <Text size="xs">annarebeckanyman@gmail.com</Text>
      {!isMobile && (
        <Text size="xs" mx={5}>
          |
        </Text>
      )}
      <Text size="xs">linkedin.com/in/annanyman</Text>
    </Flex>
  )
}
