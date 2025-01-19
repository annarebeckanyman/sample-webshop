import { Chip, Group } from '@mantine/core'
import { nanoid } from '@reduxjs/toolkit'
import { getInitialSubjects } from '@utils/getInitialSubjects'

interface Props {
  subjects: string[]
}

export default function SubjectChip({ subjects }: Props) {
  return (
    <Group gap={5} mt="md">
      {getInitialSubjects(subjects).map((subject) => (
        <Chip key={nanoid()} radius="xs" size="xs" tt="capitalize">
          {subject}
        </Chip>
      ))}
    </Group>
  )
}
