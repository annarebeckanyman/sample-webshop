import { Box, Group, Stack, Text, Title } from '@mantine/core'
import FilterButton from '@components/filter-button/FilterButton'
import ProductsList from '@features/products-list/ProductsList'
import { Filter } from '@typings/filter.types'
import { useState } from 'react'

const filters: Filter[] = [
  { title: 'Romance', subject: 'romance' },
  { title: 'Horror', subject: 'horror' },
  { title: 'Fantasy', subject: 'fantasy' },
  { title: 'Poetry', subject: 'poetry' },
]

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>(filters[0])

  return (
    <>
      <Box ta="center">
        <Title fz={45} fw={500} mb="lg">
          Welcome to a world of stories
        </Title>
        <Text size="xl" fs="italic">
          "I think books are like people, in the sense that they’ll turn up in your life when you most need them."
        </Text>
        <Text size="xl" fs="italic">
          – Emma Thompson
        </Text>
      </Box>
      <Stack mt={50}>
        <Group>
          {filters.map((filter) => (
            <FilterButton key={filter.subject} filter={filter} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          ))}
        </Group>
        <ProductsList filter={activeFilter} />
      </Stack>
    </>
  )
}
