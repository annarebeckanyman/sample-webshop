import { Table, Text } from '@mantine/core'

interface Props {
  isError: boolean
}

export default function MessageRow({ isError }: Props) {
  return (
    <Table.Tr h={300}>
      <Table.Td>
        <Text ta="center">{isError ? 'Something went wrong, please try again' : 'No products found'}</Text>
      </Table.Td>
    </Table.Tr>
  )
}
