import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";
import store from "./store";

import TextButtons from "./components/Questions";
import getEquation from "./components/Equations";

const App = () => {

  var [question, answer, rand1, rand2, rand3] = getEquation();
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">Basic Maths</Heading>
          <ScoreCard />
          <TextButtons equation={[question, answer, rand1, rand2, rand3]}/>
        </Container>
      </ChakraProvider>
    </Provider>
  );
};

export default App;