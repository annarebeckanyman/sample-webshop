import { Box, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import classes from './styles/breadcrumbs.module.css'

interface Props {
  title?: string
}

export default function Breadcrumbs({ title }: Props) {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return (
    <Box>
      <Box
        pos="relative"
        top={isMobile ? -40 : -85}
        style={{ fontSize: isMobile ? theme.fontSizes.sm : theme.fontSizes.md }}
      >
        <Link to={'/'} className={classes.link}>
          Products
        </Link>
        {title && (
          <span>
            {' / '}
            {title}
          </span>
        )}
      </Box>
    </Box>
  )
}
