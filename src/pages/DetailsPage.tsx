import { Box, Grid, Group, LoadingOverlay, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Link, useParams } from 'react-router-dom'
import { useGetBookByWorkIdQuery } from '@api/booksSlice'
import BuyButton from '@features/buy-button/BuyButton'
import CoverImage from '@features/cover-image/CoverImage'
import SubjectChip from '@features/subject-section/SubjectSection'
import { useAppSelector } from '@store/hooks'
import { CartItem, Description, ProductResponse } from '@typings/product.types'
import { getCleanAuthorId, getCleanWorkId } from '@utils/getCleanIds'

export default function DetailsPage() {
  const { selectedProduct } = useAppSelector((state) => state.products)

  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetBookByWorkIdQuery(id ?? '')

  const mapToCartItem = (data: ProductResponse): CartItem => {
    return {
      workId: getCleanWorkId(data.key),
      title: data.title,
      author: selectedProduct?.author ?? data.authors[0].author.key,
      quantity: 1,
    }
  }

  const getDescription = (description: Description) => {
    if (typeof description === 'string') {
      return description
    } else if (description && typeof description === 'object') {
      return description.value
    }
  }

  return (
    <Grid>
      <Grid.Col span={isMobile ? 12 : 3} pr="xl">
        <CoverImage isbn={selectedProduct?.isbn ?? null} />
      </Grid.Col>
      <Grid.Col span={isMobile ? 12 : 9} ta={isMobile ? 'center' : 'left'}>
        <Link to={'/'} color="#3d405b">
          Products
        </Link>
        <Box pos="relative" mih={100}>
          <LoadingOverlay visible={isLoading} />
          {data ? (
            <Stack>
              <Stack gap={5}>
                <Title>{data.title}</Title>
                <Text size="lg">by {selectedProduct?.author ?? getCleanAuthorId(data.authors[0].author.key)}</Text>
              </Stack>
              {data.first_sentence && (
                <Text size="xl" fs="italic" ta={'left'} style={{ fontFamily: 'EB Garamond' }}>
                  {data.first_sentence.value}
                </Text>
              )}
              <SubjectChip subjects={data.subjects} />
              <Text ta="left">{getDescription(data.description)}</Text>
              <Group justify="end" mt="xl">
                <BuyButton product={mapToCartItem(data)} size="lg" />
              </Group>
            </Stack>
          ) : (
            <>{!isLoading && <Text ta="center">{isError ? 'Something went wrong, please try again' : 'No product found'}</Text>}</>
          )}
        </Box>
      </Grid.Col>
    </Grid>
  )
}
