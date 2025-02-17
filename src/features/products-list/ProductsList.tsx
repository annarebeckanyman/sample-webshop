import { Box, Divider, LoadingOverlay, Table, Text } from '@mantine/core'
import { useEffect } from 'react'
import { useGetBooksBySubjectQuery } from '@api/booksSlice'
import { Filter } from '@typings/filter.types'
import ProductRow from './components/ProductRow'

interface Props {
  filter: Filter
}

export default function ProductsList({ filter }: Props) {
  const { data, isLoading, isError } = useGetBooksBySubjectQuery(filter.subject)

  useEffect(() => {
    localStorage.removeItem('selectedProduct')
  }, [])

  return (
    <Box>
      <Text mt="xl" mb="xs">
        {data ? data.works.length : '0'} products
      </Text>
      <Box pos="relative" h={isLoading ? 500 : 'auto'}>
        <LoadingOverlay visible={isLoading} loaderProps={{ color: '#3d405b' }} py="xl" />
        <Divider />
        <Table verticalSpacing="md">
          <Table.Tbody>
            {data ? (
              data.works.map((work) => <ProductRow key={work.cover_id} product={work} />)
            ) : (
              <Table.Tr>
                <Table.Td>
                  {!isLoading && <Text ta="center">{isError ? 'Something went wrong, please try again' : 'No products found'}</Text>}
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </Box>
    </Box>
  )
}
