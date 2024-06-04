import { Box, Button, Container, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Box as="section" bg="gray.100" py={20}>
                <Container maxW="container.xl">
                <Flex
                    align="center"
                    justify="space-between"
                    direction={{ base: 'column', md: 'row' }}
                >
                    <VStack align="start" spacing={5} maxW="lg">
                    <Heading as="h2" size="2xl">
                        Transforming Buildings with Cutting-Edge Automation and Control Solutions
                    </Heading>
                    <Text fontSize="xl">
                        Elevate your building's efficiency, comfort, and security with our innovative
                        automation technologies.
                    </Text>
                    <HStack spacing={4} mb={{base: "20px", lg: "0"}}>
                        <Button as="a" colorScheme="blue" size="lg" href="#contact">
                        Contact Us
                        </Button>
                        {/* <Button colorScheme="gray" size="lg">
                        Learn More
                        </Button> */}
                    </HStack>
                    </VStack>
                    <Box w={{ base: '100%', md: '50%' }}>
                    <Image
                        // src="https://via.placeholder.com/600"
                        src="./hero.jpg"
                        alt="Modern Building"
                        boxSize="100%"
                        objectFit="cover"
                        borderRadius="md"
                    />
                    </Box>
                </Flex>
                </Container>
            </Box>
    )
}

export default Hero