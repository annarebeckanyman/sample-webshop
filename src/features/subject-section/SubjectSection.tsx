import { Chip, Group } from '@mantine/core'
import { nanoid } from '@reduxjs/toolkit'

interface Props {
  subjects: string[]
}

export default function SubjectChip({ subjects }: Props) {
  const getCleanedSubjects = () =>
    subjects.map((subject) =>
      subject
        .replace(/--|,|"/g, '')
        .replace(/_/g, ' ')
        .slice(0, 25)
    )

  const getFirstSubjects = () => {
    const cleanedSubjects = getCleanedSubjects()
    if (cleanedSubjects.length > 5) {
      return cleanedSubjects.slice(0, 5)
    }
    return cleanedSubjects
  }

  return (
    <Group gap={5} mt="md">
      {getFirstSubjects().map((subject) => (
        <Chip key={nanoid()} radius="xs" size="xs" tt="capitalize">
          {subject}
        </Chip>
      ))}
    </Group>
  )
}
