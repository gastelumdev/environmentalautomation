import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

const Solutions = () => {
  return (
    <Box id="solutions" as="section" py={20}>
        <Container maxW="container.xl">
        <VStack spacing={10}>
            <Heading as="h2" size="xl">
            Our Solutions
            </Heading>
            <Text fontSize="lg" textAlign="center">
            Our solutions are designed to optimize building performance, enhance occupant comfort,
            and reduce operational costs. We integrate the latest technologies to provide scalable
            and flexible solutions for diverse building types.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Smart Buildings
                </Heading>
                <Text mt={3}>Integrated systems for optimal efficiency and comfort.</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Green Buildings
                </Heading>
                <Text mt={3}>Sustainable solutions for energy and resource conservation.</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Custom Solutions
                </Heading>
                <Text mt={3}>Tailored automation systems for unique building needs.</Text>
            </Box>
            </SimpleGrid>
        </VStack>
        </Container>
    </Box>
  )
}

export default Solutions