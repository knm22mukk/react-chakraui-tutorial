import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme='teal'>ボタン</Button>
      <h2>色の確認</h2>
    </ChakraProvider>
  );
}

export default App;
