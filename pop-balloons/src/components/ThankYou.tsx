import { Box, Button, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import{
  shuffleModes,
  SHUFFLE_MODES,
} from "../store/actions";

const ThankYou = () => {

  const dispatch = useDispatch();

  return (
    <Container maxW="container.lg" centerContent>
      <Heading as="h6" size="lg">
        Thank you! Page
      </Heading>
    </Container >
  );
};

export default ThankYou;