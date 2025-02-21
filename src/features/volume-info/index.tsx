import CategoryBadge from '@features/category-badge'
import { Stack, Text, Title } from '@mantine/core'
import { VolumeInfo } from '@typings/book.types'
import { getAuthors } from '@utils/getAuthors'
import { shortenTitle } from '@utils/shortenTitle'

interface Props {
  volume: VolumeInfo
}

export default function VolumeSection({ volume }: Props) {
  return (
    <>
      <Stack gap={5}>
        <Title>{shortenTitle(volume.title, 100)}</Title>
        {volume.subtitle && <Title size="xl">{volume.subtitle}</Title>}
        <Text size="lg">by {getAuthors(volume.authors)}</Text>
      </Stack>
      <CategoryBadge categories={volume.categories} />
      <Text dangerouslySetInnerHTML={{ __html: volume.description ?? 'No description available.' }} />
    </>
  )
}
