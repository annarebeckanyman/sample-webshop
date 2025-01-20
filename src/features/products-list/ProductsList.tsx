import { Box, Divider, LoadingOverlay, Table, Text } from '@mantine/core'
import { Filter } from '@typings/filter.types'
import { useGetBooksBySubjectQuery } from '@store/slices/booksSlice'
import ProductRow from './components/ProductRow'
import { useEffect } from 'react'
import { useAppDispatch } from '@store/hooks'
import { setSelectedProduct } from '@store/slices/productsSlice'

interface Props {
  filter: Filter
}

export default function ProductsList({ filter }: Props) {
  const { data, isLoading, isError } = useGetBooksBySubjectQuery(filter.subject)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setSelectedProduct(null))
  }, [])

  return (
    <Box>
      <Text mt="xl" mb="xs">
        {data ? data.works.length : '0'} products
      </Text>
      <Box pos="relative" mih={100}>
        <LoadingOverlay visible={isLoading} />
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
