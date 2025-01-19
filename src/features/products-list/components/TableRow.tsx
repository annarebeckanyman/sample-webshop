import { Button, Table, Text } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setShoppingCart } from '@store/slices/productsSlice'
import { Work } from '@typings/products.types'
import { FaShoppingBasket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import classes from '../styles/productList.module.css'

interface Props {
  product: Work
}

export default function TableRow({ product }: Props) {
  const { shoppingCart } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const getShortenedSubjects = (subjects: string[]) => {
    const allSubjects = subjects.join(', ').replace(/--/g, '').slice(0, 100)

    if (allSubjects.length > 100) {
      return allSubjects.slice(0, 100) + ' ...'
    }
    return allSubjects
  }

  const handleBuy = () => {
    dispatch(setShoppingCart([...shoppingCart, product]))
  }

  return (
    <Table.Tr key={product.title}>
      <Table.Td>
        <Link to={'/contact'} className={classes.productLink}>
          <Text size="lg" fw={500}>
            {product.title}
          </Text>
          <Text size="lg">by {product.authors.map((author) => author.name).join(', ')}</Text>
          <Text mt="xs" fs="italic">
            {getShortenedSubjects(product.subject)}
          </Text>
        </Link>
      </Table.Td>
      <Table.Td className={classes.buttonCell}>
        <Button onClick={handleBuy} radius="xs" rightSection={<FaShoppingBasket />}>
          Buy
        </Button>
      </Table.Td>
    </Table.Tr>
  )
}
