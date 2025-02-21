import { Box, Button, Text } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setActiveFilter } from '@store/slices/productsSlice'
import { TableFilter } from '@typings/table.types'
import classes from './styles/filterButton.module.css'

interface Props {
  filter: TableFilter
}

export default function FilterButton({ filter }: Props) {
  const { activeFilter } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const isActive = filter.subject === activeFilter.subject

  return (
    <Box>
      <Button
        onClick={() => dispatch(setActiveFilter(filter))}
        size="lg"
        variant="outline"
        radius="xs"
        className={`${classes.buttonText} ${isActive ? classes.activeButton : ''}`}
      >
        <Text>{filter.title}</Text>
      </Button>
    </Box>
  )
}
