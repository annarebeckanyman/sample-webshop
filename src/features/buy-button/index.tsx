import { Button } from '@mantine/core'
import { useAppDispatch } from '@store/hooks'
import { addToCart } from '@store/slices/productsSlice'
import { BookItem } from '@typings/book.types'
import { FaShoppingBasket } from 'react-icons/fa'

interface Props {
  item: BookItem
  size: 'sm' | 'lg'
}

export default function BuyButton({ item, size }: Props) {
  const dispatch = useAppDispatch()

  const mappedItem = {
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors ?? [],
    quantity: 1,
  }

  return (
    <Button
      onClick={() => dispatch(addToCart(mappedItem))}
      radius="xs"
      size={size}
      color="#E07A5F"
      rightSection={<FaShoppingBasket />}
    >
      Buy
    </Button>
  )
}
