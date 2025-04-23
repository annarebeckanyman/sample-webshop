import { useGetBooksBySubjectQuery } from '@api/booksApi'
import { Box, Divider, Flex, Pagination, Table } from '@mantine/core'
import { useAppSelector } from '@store/hooks'
import { useEffect, useMemo, useState } from 'react'
import LoadingRow from './components/LoadingRow'
import MessageRow from './components/MessageRow'
import ProductRow from './components/ProductRow'
import ProductCount from './components/ProductsCount'

export default function ProductList() {
  const { activeFilter } = useAppSelector((state) => state.products)
  const { data, isLoading, isFetching, isError } = useGetBooksBySubjectQuery(activeFilter.subject)

  const [activePage, setActivePage] = useState(1)

  const totalPages = Math.ceil((data?.totalItems ?? 0) / 10)

  const activeItems = useMemo(() => {
    const start = (activePage - 1) * 10
    const end = activePage * 10
    return data?.items?.slice(start, end) ?? []
  }, [data?.items, activePage])

  useEffect(() => {
    setActivePage(1)
  }, [activeFilter])

  const handlePageChange = (newPage: number) => {
    setActivePage(newPage)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Box>
      <ProductCount total={data?.items?.length ?? 0} />
      <Divider />
      <Table verticalSpacing="md">
        <Table.Tbody>
          {isLoading || isFetching ? (
            <LoadingRow />
          ) : activeItems.length ? (
            activeItems.map((item) => <ProductRow key={item.id} item={item} />)
          ) : (
            <MessageRow isError={isError} />
          )}
        </Table.Tbody>
      </Table>
      <Flex justify="center">
        <Pagination total={totalPages} value={activePage} onChange={handlePageChange} color="#3d405b" />
      </Flex>
    </Box>
  )
}
