import { Grid, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import CoverImage from '@features/cover-image/CoverImage'
import DetailsSection from '@features/details-section/DetailsSection'
import { ProductDetails } from '@typings/product.types'

export default function DetailsPage() {
  const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct') ?? '{}') as ProductDetails

  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  return (
    <Grid>
      <Grid.Col span={isMobile ? 12 : 3} pr="xl">
        <CoverImage isbn={selectedProduct?.isbn ?? null} />
      </Grid.Col>
      <Grid.Col span={isMobile ? 12 : 9} ta={isMobile ? 'center' : 'left'}>
        <Link to={'/'} color="#3d405b">
          Products
        </Link>
        <DetailsSection />
      </Grid.Col>
    </Grid>
  )
}
