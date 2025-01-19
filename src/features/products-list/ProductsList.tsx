import { Box, Divider, LoadingOverlay, Table, Text } from '@mantine/core'
import { useGetBooksBySubjectQuery } from '@store/slices/apiSlice'
import { Filter } from '@typings/filter.types'
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
      <Box pos="relative" mih={100}>
        <LoadingOverlay visible={isLoading} />
        <Divider />
        <Table verticalSpacing="md">
          <Table.Tbody>
            {data ? (
              data.works.map((work) => <TableRow key={work.cover_id} product={work} />)
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
