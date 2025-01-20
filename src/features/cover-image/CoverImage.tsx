import { Flex, Image, Text, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface Props {
  isbn: string | null
}

export default function CoverImage({ isbn }: Props) {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  const coverUrl = isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg` : null

  return (
    <>
      {coverUrl ? (
        <Flex justify="center">
          <Image src={coverUrl} alt="" h={isMobile ? 300 : ''} w={isMobile ? 'auto' : ''} fit="contain"></Image>
        </Flex>
      ) : (
        <Flex
          justify="center"
          align="center"
          mx="auto"
          h={isMobile ? 300 : '100%'}
          mah={isMobile ? '' : 400}
          w={isMobile ? 220 : ''}
          style={{
            backgroundColor: theme.colors.gray[1],
            color: theme.colors.gray[8],
          }}
        >
          <Text size="sm" fs="italic">
            No cover available
          </Text>
        </Flex>
      )}
    </>
  )
}
