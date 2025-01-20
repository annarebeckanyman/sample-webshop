import { Button, Group, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Stack gap={5}>
      <Title fw={400}>Oops, nothing here...</Title>
      <Text mt="xl">Something went wrong or the page doesn't exist, please try again</Text>
      <Group>
        <Button component={Link} to={'/'} mt="md" bg="black" size="md" radius="xs">
          <Text tt="uppercase" fw={400} c="">
            Return to Home
          </Text>
        </Button>
      </Group>
    </Stack>
  )
}
