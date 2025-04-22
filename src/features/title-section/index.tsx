import { Box, Text, Title } from '@mantine/core'
import classes from './styles/titleSection.module.css'

export default function TitleSection() {
  return (
    <Box ta="center" className={classes.text}>
      <Title fz={50} fw={500} mb="lg" className={classes.text}>
        Welcome to a world of stories
      </Title>
      <Text size="xl" fs="italic">
        &quot;I think books are like people, in the sense that they’ll turn up in your life when you most need
        them.&quot;
      </Text>
      <Text size="xl" fs="italic">
        – Emma Thompson
      </Text>
    </Box>
  )
}
