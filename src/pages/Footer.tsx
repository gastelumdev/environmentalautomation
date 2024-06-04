import { EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { companyName } from '../../config'

const Footer = () => {
  return (
    <Box as="footer" bg="gray.700" color="white" py={4}>
        <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
            <Text>&copy; 2024 {companyName}. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton aria-label="Phone" icon={<PhoneIcon />} />
              <IconButton aria-label="Email" icon={<EmailIcon />} />
            </HStack>
        </Flex>
        </Container>
    </Box>
  )
}

export default Footer