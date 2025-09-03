import { useGetBookByIdQuery } from '@api/booksApi'
import Breadcrumbs from '@features/breadcrumbs'
import BuyButton from '@features/buy-button'
import CategoryBadge from '@features/category-badge'
import CoverImage from '@features/cover-image'
import { Grid, Group, LoadingOverlay, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { getAuthors } from '@utils/getAuthors'
import { shortenTitle } from '@utils/shortenTitle'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetBookByIdQuery(id ?? '', { skip: !id })
  const [loading, setLoading] = useState(true)

  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)

  useEffect(() => {
    if (!isLoading) {
      setLoading(false)
    }
  }, [isLoading])

  return loading ? (
    <LoadingOverlay visible={true} loaderProps={{ color: '#3d405b' }} />
  ) : (
    <>
      <Breadcrumbs title={data?.volumeInfo.title} />
      {data ? (
        <Grid>
          <Grid.Col span={isMobile ? 12 : 3} pr="xl">
            <CoverImage coverUrl={data.volumeInfo.imageLinks?.thumbnail} />
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 9}>
            <Stack>
              <Stack gap={5} ta={isMobile ? 'center' : 'left'}>
                <Title>{shortenTitle(data.volumeInfo.title, 100)}</Title>
                {data.volumeInfo.subtitle && <Title size="xl">{data.volumeInfo.subtitle}</Title>}
                <Text size="lg">by {getAuthors(data.volumeInfo.authors)}</Text>
              </Stack>
              <CategoryBadge categories={data.volumeInfo.categories} />
              <Text dangerouslySetInnerHTML={{ __html: data.volumeInfo.description ?? 'No description available.' }} />
              <Group justify="end" mt="xl">
                <BuyButton item={data} size="lg" />
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      ) : (
        <Text ta="center">{isError ? 'Something went wrong, please try again' : 'No product found'}</Text>
      )}
    </>
  )
}
