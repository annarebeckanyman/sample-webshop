import { Flex, Indicator, Text } from '@mantine/core'
import { useAppSelector } from '@store/hooks'
import { FaShoppingBasket } from 'react-icons/fa'
import classes from './cartButton.module.css'

export default function CartButton() {
  const { cart } = useAppSelector((state) => state.products)

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  const cappedQuantity = totalQuantity > 99 ? '99+' : totalQuantity

  return (
    <Flex align="center" gap="xs">
      <Text mb={1} className={classes.cartLink}>
        Shopping basket
      </Text>
      <Indicator
        label={
          <Text size="xs" fw={500}>
            {cappedQuantity}
          </Text>
        }
        disabled={!cart.length}
        size={18}
        offset={1}
        color="#E07A5F"
        styles={{
          indicator: {
            borderRadius: '50%',
            padding: 0,
          },
        }}
      >
        <Flex align="center">
          <FaShoppingBasket className={classes.cartIcon} aria-labelledby="Shopping cart" />
        </Flex>
      </Indicator>
    </Flex>
  )
}
