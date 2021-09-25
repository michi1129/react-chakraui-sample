import { ChakraProvider, Button } from "@chakra-ui/react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>aaaaaa</p>
    </ChakraProvider>
  );
}

export default App;
