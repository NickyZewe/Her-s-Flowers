import { VStack } from "@chakra-ui/react";
import "./App.css";
import Body from "./components/Body";

function App() {
  return (
    <VStack padding={5} direction="column" alignItems="center">
      <Body />
    </VStack>
  );
}

export default App;
