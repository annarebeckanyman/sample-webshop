import { Stack, Text, Title } from '@mantine/core'
import { nanoid } from '@reduxjs/toolkit'
import { useAppSelector } from '@store/hooks'

export default function CheckoutPage() {
  const { shoppingCart } = useAppSelector((state) => state.products)

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
    </Stack>
  )
}
