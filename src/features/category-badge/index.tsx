import { Badge, Group } from '@mantine/core'
import { nanoid } from '@reduxjs/toolkit'
import classes from './styles/categoryBadge.module.css'

interface Props {
  categories?: string[]
  clickable?: boolean
}

export default function CategoryBadge({ categories, clickable = false }: Props) {
  const getShortenedCategories = () => categories?.slice(0, 6)

  return (
    <Group gap={5} mt="md">
      {getShortenedCategories()?.map((category) => (
        <Badge
          key={nanoid()}
          color="gray"
          variant="light"
          c="black"
          radius="xs"
          tt="capitalize"
          fw={400}
          className={clickable ? classes.clickableBadge : ''}
        >
          {category}
        </Badge>
      ))}
    </Group>
  )
}
