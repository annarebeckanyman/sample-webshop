import { Box, Grid, Group, LoadingOverlay, Stack, Text, Title } from '@mantine/core'
import { useParams } from 'react-router-dom'
import { useGetBookByWorkIdQuery } from '@store/slices/booksSlice'
import SubjectChip from '@features/subject-section/SubjectSection'
import BuyButton from '@features/buy-button/BuyButton'
import { useAppSelector } from '@store/hooks'
import { CartItem, ProductResponse } from '@typings/product.types'
import { getCleanAuthorId, getCleanWorkId } from '@utils/getCleanIds'

export default function DetailsPage() {
  const { selectedProduct } = useAppSelector((state) => state.products)

  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetBookByWorkIdQuery(id ?? '')

  // FIX - get cover
  // const coverUrl = `https://covers.openlibrary.org/b/works/${id}-L.jpg`

  const getCartItem = (data: ProductResponse): CartItem => {
    return {
      workId: getCleanWorkId(data.key),
      title: data.title,
      author: selectedProduct?.author ?? data.authors[0].author.key,
      quantity: 1,
    }
  }

  return (
    <Grid>
      <Grid.Col span={3}>{/* <Image src={coverUrl} alt=""></Image> */}</Grid.Col>
      <Grid.Col span={9}>
        <Box pos="relative" mih={100}>
          <LoadingOverlay visible={isLoading} />
          {data ? (
            <Stack>
              <Stack gap={5}>
                <Title>{data.title}</Title>
                <Text size="lg">by {selectedProduct?.author ?? getCleanAuthorId(data.authors[0].author.key)}</Text>
              </Stack>
              <SubjectChip subjects={data.subjects} />
              <Text>{data.description}</Text>
              <Group justify="end" mt="xl">
                <BuyButton product={getCartItem(data)} size="md" />
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
