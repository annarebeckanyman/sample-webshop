import { Group, Image, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import classes from './styles/coverImage.module.css'

interface Props {
  coverUrl?: string
}

export default function CoverImage({ coverUrl }: Props) {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return coverUrl ? (
    <Group justify={isMobile ? 'center' : 'left'}>
      <Image src={coverUrl} alt="Book cover" w={250} h="auto" fit="contain" className={classes.imageShadow} />
    </Group>
  ) : null
}
