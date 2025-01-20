import { Table, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import BuyButton from '@features/buy-button/BuyButton'
import SubjectChip from '@features/subject-section/SubjectSection'
import { useAppDispatch } from '@store/hooks'
import { setSelectedProduct } from '@store/slices/productsSlice'
import { CartItem, ProductDetails, Work } from '@typings/product.types'
import { getCleanWorkId } from '@utils/getCleanIds'
import classes from '../styles/productList.module.css'

interface Props {
  product: Work
}

export default function ProductRow({ product }: Props) {
  const dispatch = useAppDispatch()

  const getProductDetails = (): ProductDetails => {
    return {
      workId: getCleanWorkId(product.key),
      isbn: product.availability.isbn,
      title: product.title,
      author: product.authors[0].name,
    }
  }

  const mapToCartItem = (): CartItem => {
    return {
      workId: getCleanWorkId(product.key),
      title: product.title,
      author: product.authors[0].name,
      quantity: 1,
    }
  }

  const handleRowClicked = () => {
    dispatch(setSelectedProduct(getProductDetails()))
  }

  return (
    <Table.Tr key={product.title}>
      <Table.Td>
        <Link to={`/product/${getCleanWorkId(product.key)}`} onClick={handleRowClicked} className={classes.productCell}>
          <Text size="lg" fw={500}>
            {product.title}
          </Text>
          <Text size="lg">by {product.authors[0].name}</Text>
          <SubjectChip subjects={product.subject} />
        </Link>
      </Table.Td>
      <Table.Td className={classes.buttonCell}>
        <BuyButton product={mapToCartItem()} size="sm" />
      </Table.Td>
    </Table.Tr>
  )
}
