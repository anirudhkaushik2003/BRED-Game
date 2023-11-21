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

const Instruction4 = () => {
  const dispatch = useDispatch();
  const step = useSelector((state: IGlobalState) => state.step);
  useEffect(() => {
    if (step == 5) {
      const randomDuration = Math.floor(Math.random() * 10000) + 1000; // Random duration between 1s and 6s

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
        You will now be paired with an opponent (Step 3/4)
      </Heading>
      <Container maxW="container.lg" centerContent>

        <Spinner height="300px" width="300px"></Spinner>
        <h3>Searching for opponet</h3>
      </Container >
    </Container >
  );
};

export default Instruction4;