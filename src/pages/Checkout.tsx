import { Button, Group, Stack, Text, Title } from '@mantine/core'
import { nanoid } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setCart } from '@store/slices/productsSlice'
import { getAuthors } from '@utils/getAuthors'

export default function Checkout() {
  const { cart } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  return (
    <Stack>
      <Title fw={400}>Shopping cart</Title>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <Text key={nanoid()}>
              {item.title}, {getAuthors(item.authors)}, Quantity: {item.quantity}
            </Text>
          ))}
        </>
      ) : (
        <Text>No products added</Text>
      )}
      {cart.length > 0 && (
        <Group>
          <Button onClick={() => dispatch(setCart([]))} color="#E07A5F" radius="xs">
            Empty Cart
          </Button>
        </Group>
      )}
    </Stack>
  )
}
