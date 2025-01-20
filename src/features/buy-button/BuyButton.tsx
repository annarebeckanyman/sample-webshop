import { Button } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setShoppingCart } from '@store/slices/productsSlice'
import { CartItem } from '@typings/product.types'
import { FaShoppingBasket } from 'react-icons/fa'

interface Props {
  product: CartItem
  size: 'sm' | 'md' | 'lg' | 'xl'
}

export default function BuyButton({ product, size }: Props) {
  const { shoppingCart } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handleBuyClick = () => {
    const itemExists = shoppingCart.some((item) => item.workId === product.workId)

    if (itemExists) {
      const updatedCart = shoppingCart.map((item) =>
        item.workId === product.workId ? { ...item, quantity: item.quantity + product.quantity } : item
      )
      dispatch(setShoppingCart(updatedCart))
    } else {
      dispatch(setShoppingCart([...shoppingCart, product]))
    }
  }

  return (
    <Button onClick={handleBuyClick} radius="xs" size={size} color="#E07A5F" rightSection={<FaShoppingBasket />}>
      Buy
    </Button>
  )
}
