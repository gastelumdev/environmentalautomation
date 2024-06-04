import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

const Services = () => {
  return (
    <Box id="services" as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl">
        <VStack spacing={10}>
            <Heading as="h2" size="xl">
            Our Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Building Automation Systems
                </Heading>
                <Text mt={3}>Energy Management, HVAC Control, Lighting Control</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Security Systems
                </Heading>
                <Text mt={3}>Access Control, Surveillance Systems, Alarm Systems</Text>
            </Box>
            <Box bg="white" p={5} borderRadius="md" shadow="md">
                <Heading as="h3" size="md">
                Facility Management
                </Heading>
                <Text mt={3}>Remote Monitoring, Predictive Maintenance, System Integration</Text>
            </Box>
            </SimpleGrid>
        </VStack>
        </Container>
    </Box>
  )
}

export default Services