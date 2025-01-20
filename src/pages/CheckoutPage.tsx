import { Button, Group, Stack, Text, Title } from '@mantine/core'
import { nanoid } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setShoppingCart } from '@store/slices/productsSlice'

export default function CheckoutPage() {
  const { shoppingCart } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handleEmptyCart = () => {
    dispatch(setShoppingCart([]))
  }

  return (
    <Stack>
      <Title fw={400}>Shopping cart</Title>
      {shoppingCart.length > 0 ? (
        <>
          {shoppingCart.map((item) => (
            <Text key={nanoid()}>
              {item.title}, {item.author}, Quantity: {item.quantity}
            </Text>
          ))}
        </>
      ) : (
        <Text>No products added</Text>
      )}
      {shoppingCart.length > 0 && (
        <Group>
          <Button onClick={handleEmptyCart} color="#E07A5F" radius="xs">
            Empty Cart
          </Button>
        </Group>
      )}
    </Stack>
  )
}
