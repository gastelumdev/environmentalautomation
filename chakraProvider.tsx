import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
});

const ChakraProviderWrapper = ({ children }: {children: any}) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
