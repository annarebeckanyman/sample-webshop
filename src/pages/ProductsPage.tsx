import { Group, Stack, Text } from '@mantine/core'
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
      <Text size="md" fw={500} mb="xs">
        Browse by category
      </Text>
      <Stack>
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
