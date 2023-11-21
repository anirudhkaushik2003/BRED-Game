import { Box, Button, Flex, Heading, Kbd, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  INCREMENT_STEP,
  incrementStep,
} from "../store/actions";

const Instruction3 = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: IGlobalState) => state.step);
  useEffect(() => {
    if (step == 4) {
      const randomDuration = Math.floor(Math.random() * 5000) + 5000; // Random duration between 5s and 10s


      const timeoutId = setTimeout(() => {
        dispatch(incrementStep(INCREMENT_STEP));
      }, randomDuration);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [dispatch]);
  return (
    <Container maxW="container.lg" centerContent>
      <Heading as="h6" size="lg">
        You will now be paired with an opponent. You will be competing against an opponent. Good luck! (Step 2/4)
      </Heading>
    </Container >
  );
};

export default Instruction3;