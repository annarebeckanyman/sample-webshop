import { useGetBookByWorkIdQuery } from '@api/booksSlice'
import BuyButton from '@features/buy-button/BuyButton'
import SubjectChip from '@features/subject-section/SubjectSection'
import { Box, Group, LoadingOverlay, Stack, Text, Title } from '@mantine/core'
import { CartItem, Description, ProductDetails, ProductResponse } from '@typings/product.types'
import { getCleanAuthorId, getCleanWorkId } from '@utils/getCleanIds'
import { useParams } from 'react-router-dom'

export default function DetailsSection() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetBookByWorkIdQuery(id ?? '')
  const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct') ?? '{}') as ProductDetails

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
    <Box pos="relative" mih={100}>
      <LoadingOverlay visible={isLoading} loaderProps={{ color: '#3d405b' }} />
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
  )
}
