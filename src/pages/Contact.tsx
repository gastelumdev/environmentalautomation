import { Box, Button, Container, Heading, Input, Stack, Textarea, VStack } from '@chakra-ui/react'

const Contact = () => {
  return (
    <Box id="contact" as="section" bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
        <VStack spacing={4} align="center">
            <Heading as="h2" size="lg">
            Get in Touch
            </Heading>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} w={{base: "100%", md: "686px"}}>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Phone" />
            </Stack>
            <Textarea placeholder="Your Message" w={{base: "100%", md: "686px"}} />
            <Button colorScheme="blue">Send Message</Button>
        </VStack>
        </Container>
    </Box>
  )
}

export default Contact