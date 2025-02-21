import BuyButton from '@features/buy-button'
import CategoryBadge from '@features/category-badge'
import { Stack, Table, Text } from '@mantine/core'
import { BookItem } from '@typings/book.types'
import { getAuthors } from '@utils/getAuthors'
import { shortenTitle } from '@utils/shortenTitle'
import { Link } from 'react-router-dom'
import classes from '../styles/productList.module.css'

interface Props {
  item: BookItem
}

export default function ProductRow({ item }: Props) {
  return (
    <Table.Tr>
      <Table.Td>
        <Link to={`/product/${item.id}`} className={classes.productCell}>
          <Stack gap={0}>
            <Text size="xl" fw={500}>
              {shortenTitle(item.volumeInfo.title, 55)}
            </Text>
            <Text size="lg">by {getAuthors(item.volumeInfo.authors)}</Text>
            <CategoryBadge categories={item.volumeInfo.categories} clickable />
          </Stack>
        </Link>
      </Table.Td>
      <Table.Td className={classes.buttonCell}>
        <BuyButton item={item} size="sm" />
      </Table.Td>
    </Table.Tr>
  )
}
