import { Button, Container, Paper, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Container h="inherit" size="xl" m="xl">
      <Paper radius="md" p="xl" my="xl" mih={500}>
        <Title fw={500}>Oops, nothing here...</Title>
        <Text mt="xl">The page doesn'y seem to exist, please try again or return to home.</Text>
        <Button component={Link} to={'/'} mt="md" bg="black" size="md" radius="xs">
          Return to Home
        </Button>
      </Paper>
    </Container>
  )
}
