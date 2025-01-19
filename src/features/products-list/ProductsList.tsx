import { Box, Divider, LoadingOverlay, Table, Text } from '@mantine/core'
import { useGetBooksBySubjectQuery } from '@store/slices/apiSlice'
import { Filter } from '@typings/subject.types'
import TableRow from './components/TableRow'

interface Props {
  filter: Filter
}

export default function ProductsList({ filter }: Props) {
  const { data, isLoading, isError } = useGetBooksBySubjectQuery(filter.subject)

  return (
    <Box>
      <Text mt="xl" mb="xs">
        {data ? data.works.length : '0'} products
      </Text>
      <Box pos="relative" mih={300}>
        <LoadingOverlay visible={isLoading} overlayProps={{ blur: 1 }} />
        {isError && <Text>Something went wrong while getting products, please try again</Text>}
        <Divider />
        <Table verticalSpacing="md">
          <Table.Tbody>
            {data ? data.works.map((work) => <TableRow key={work.cover_id} product={work} />) : <Text>No products found</Text>}
          </Table.Tbody>
        </Table>
      </Box>
    </Box>
  )
}
