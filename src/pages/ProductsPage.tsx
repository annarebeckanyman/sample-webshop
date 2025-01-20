import { Group, Stack } from '@mantine/core'
import { useState } from 'react'
import FilterButton from '@features/filter-button/FilterButton'
import ProductsList from '@features/products-list/ProductsList'
import TitleSection from '@features/title-section/TitleSection'
import { Filter } from '@typings/filter.types'

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
      <TitleSection />
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
