import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Container,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavLink = ({link}: { link: {href: string, title: string} }) => {
    return <Button as={"a"} variant="link" colorScheme="white" href={link.href}>
                {link.title}
            </Button>
}

export default function Navbar({ links, businessName, children }: { links: {href: string, title: string}[], businessName: string, children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Box as="header" bg="blue.700" color="white" py={4}>
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Flex>
                        <IconButton
                            size={'lg'}
                            h={"24px"}
                            bg={useColorModeValue('blue.700', 'gray.900')}
                            color={"white"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                            _hover={{bg: useColorModeValue('blue.700', 'gray.900')}}
                        />
                        <Heading as="h1" size="md">
                            {businessName}
                        </Heading>
                    </Flex>
                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        {links.map((link) => {
                            return <NavLink key={link.href} link={link} />
                        })}
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box py={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                        {links.map((link) => (
                            <NavLink key={link.href} link={link} />
                        ))}
                        </Stack>
                    </Box>
                ) : null}
            </Container>
            
        </Box>
        <Box>{children}</Box>
      </>
    )
}