import { filters } from '@constants/filters'
import FilterButton from '@features/filter-button'
import ProductList from '@features/product-list'
import TitleSection from '@features/title-section'
import { Group, Stack } from '@mantine/core'

export default function Products() {
  return (
    <Stack>
      <TitleSection />
      <Group mt="xl" justify="center">
        {filters.map((filter) => (
          <FilterButton key={filter.subject} filter={filter} />
        ))}
      </Group>
      <ProductList />
    </Stack>
  )
}
