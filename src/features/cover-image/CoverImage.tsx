import { Flex, Image, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface Props {
  isbn: string | null
}

export default function CoverImage({ isbn }: Props) {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  const defaultUrl = 'https://covers.openlibrary.org/b/isbn/9798373104548-L.jpg'
  const coverUrl = isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg` : defaultUrl

  return (
    <Flex justify="center">
      <Image src={coverUrl} alt="" h={isMobile ? 300 : ''} w={isMobile ? 'auto' : ''} fit="contain"></Image>
    </Flex>
  )
}
