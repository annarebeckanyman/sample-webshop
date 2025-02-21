import { useGetBooksBySubjectQuery } from '@api/booksApi'
import { Box, Divider, Table } from '@mantine/core'
import { useAppSelector } from '@store/hooks'
import { BookItem } from '@typings/book.types'
import { useEffect, useState } from 'react'
import LoadingRow from './components/LoadingRow'
import MessageRow from './components/MessageRow'
import ProductRow from './components/ProductRow'
import ProductCount from './components/ProductsCount'

export default function ProductList() {
  const { activeFilter } = useAppSelector((state) => state.products)
  const { data, isLoading, isFetching, isError } = useGetBooksBySubjectQuery(activeFilter.subject)

  const [tableItems, setTableItems] = useState<BookItem[]>([])
  const [tableLoading, setTableLoading] = useState(true)

  useEffect(() => {
    if (data?.items) {
      setTableItems(data.items)
    }
  }, [data])

  useEffect(() => {
    if (!isLoading || !isFetching || isError) {
      setTableLoading(false)
    }
  }, [tableItems, isLoading, isError])

  return (
    <Box>
      <ProductCount total={tableItems.length} />
      <Divider />
      <Table verticalSpacing="md">
        <Table.Tbody>
          {tableLoading ? (
            <LoadingRow />
          ) : (
            <>
              {tableItems.length > 0 ? (
                tableItems.map((item) => <ProductRow key={item.id} item={item} />)
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
