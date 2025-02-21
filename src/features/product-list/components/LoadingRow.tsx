import { Box, LoadingOverlay, Table } from '@mantine/core'

export default function LoadingRow() {
  return (
    <Table.Tr>
      <Table.Td colSpan={12} h={300}>
        <Box h="100%" pos="relative">
          <LoadingOverlay visible={true} loaderProps={{ color: '#3d405b' }} />
        </Box>
      </Table.Td>
    </Table.Tr>
  )
}
