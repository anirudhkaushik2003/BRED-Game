import { Box, Button, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import{
  shuffleModes,
  SHUFFLE_MODES,
} from "../store/actions";

const Login = () => {

  const dispatch = useDispatch();

  return (
    <Container maxW="container.lg" centerContent>
      <Heading as="h6" size="lg">
        Login Page
      </Heading>
    </Container >
  );
};

export default Login;