import { Text } from '@mantine/core'

interface Props {
  total: number
}

export default function ProductCount({ total }: Props) {
  return (
    <Text mt="xl" mb="xs">
      {total} products
    </Text>
  )
}
