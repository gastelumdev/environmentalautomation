import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { companyName } from '../../config'

const About = () => {
  return (
    <Box id="about" as="section" py={20}>
        <Container maxW="container.xl">
        <VStack spacing={10}>
            <Heading as="h2" size="xl">
            About Us
            </Heading>
            <Text fontSize="lg" textAlign="center">
            With over 30 years of experience, {companyName} specializes in providing comprehensive
            building automation and control solutions. Our mission is to create intelligent,
            efficient, and sustainable environments for commercial, industrial, and residential
            buildings.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Expert Team
                </Heading>
                <Text mt={3}>A highly skilled team of engineers and technicians.</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Innovative Solutions
                </Heading>
                <Text mt={3}>Cutting-edge technologies and customized solutions.</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Customer Focused
                </Heading>
                <Text mt={3}>Tailored services to meet unique client needs.</Text>
            </Box>
            </SimpleGrid>
        </VStack>
        </Container>
    </Box>
  )
}

export default About