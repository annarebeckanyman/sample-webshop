import { Button, Chip, Group, Table, Text } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setShoppingCart } from '@store/slices/productsSlice'
import { Work } from '@typings/products.types'
import { FaShoppingBasket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import classes from '../styles/productList.module.css'
import { nanoid } from '@reduxjs/toolkit'

interface Props {
  product: Work
}

export default function TableRow({ product }: Props) {
  const { shoppingCart } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const getCleanedSubjects = (subjects: string[]) => subjects.map((subject) => subject.replace(/--|,|"/g, '').replace(/_/g, ' '))

  const getInitialSubjects = (subjects: string[]) => {
    const cleanedSubjects = getCleanedSubjects(subjects)
    if (cleanedSubjects.length > 5) {
      return cleanedSubjects.slice(0, 5)
    }
    return cleanedSubjects
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
          <Group gap={5} mt="md">
            {getInitialSubjects(product.subject).map((subject) => (
              <Chip key={nanoid()} color="gray" radius="xs" size="xs" tt="capitalize">
                {subject}
              </Chip>
            ))}
          </Group>
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
