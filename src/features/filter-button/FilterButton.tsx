import { Box, Button, Text } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import { Filter } from '@typings/filter.types'
import classes from './styles/filterButton.module.css'

interface Props {
  filter: Filter
  activeFilter: Filter
  setActiveFilter: Dispatch<SetStateAction<Filter>>
}

export default function FilterButton({ filter, activeFilter, setActiveFilter }: Props) {
  const isActive = filter.subject === activeFilter.subject

  return (
    <Box>
      <Button
        onClick={() => setActiveFilter(filter)}
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
