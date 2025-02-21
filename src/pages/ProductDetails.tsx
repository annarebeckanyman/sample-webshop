import { useGetBookByIdQuery } from '@api/booksApi'
import Breadcrumbs from '@features/breadcrumbs'
import BuyButton from '@features/buy-button'
import CoverImage from '@features/cover-image'
import VolumeSection from '@features/volume-info'
import { Grid, Group, LoadingOverlay, Stack, Text, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
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
            <CoverImage coverUrl={data?.volumeInfo.imageLinks?.thumbnail} />
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 9} ta={isMobile ? 'center' : 'left'}>
            <Stack>
              <VolumeSection volume={data.volumeInfo} />
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
