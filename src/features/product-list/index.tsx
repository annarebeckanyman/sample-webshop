import { useGetBooksBySubjectQuery } from '@api/booksApi'
import { Box, Divider, Table } from '@mantine/core'
import { useAppSelector } from '@store/hooks'
import { useEffect, useState } from 'react'
import LoadingRow from './components/LoadingRow'
import MessageRow from './components/MessageRow'
import ProductRow from './components/ProductRow'
import ProductCount from './components/ProductsCount'

export default function ProductList() {
  const { activeFilter } = useAppSelector((state) => state.products)
  const { data, isLoading, isFetching, isError } = useGetBooksBySubjectQuery(activeFilter.subject)

  const [tableLoading, setTableLoading] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      setTableLoading(false)
    }
  }, [isLoading])

  useEffect(() => {
    if (isFetching) {
      setTableLoading(true)
    } else {
      setTableLoading(false)
    }
  }, [isFetching])

  return (
    <Box>
      <ProductCount total={data?.items?.length ?? 0} />
      <Divider />
      <Table verticalSpacing="md">
        <Table.Tbody>
          {tableLoading ? (
            <LoadingRow />
          ) : (
            <>
              {data?.items?.length ? (
                data.items.map((item) => <ProductRow key={item.id} item={item} />)
              ) : (
                <MessageRow isError={isError} />
              )}
            </>
          )}
        </Table.Tbody>
      </Table>
    </Box>
  )
}
