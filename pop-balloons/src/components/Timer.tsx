import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";


import React, { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  incrementStep,
  INCREMENT_STEP,
  decrementTime,
} from "../store/actions";

const Timer = () => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state: IGlobalState) => state.timeLeft);
  const step = useSelector((state: IGlobalState) => state.step);

  // Calculate minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      if ((step === 2 || step === 4 || step === 6 || step === 8)) {
        dispatch(decrementTime());
      }

    }, 1000);

    return () => clearInterval(intervalId); // This clears the interval when the component unmounts
  }, []);

  return (
    <Heading as="h2" size="md" mt={5} mb={5}> Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </Heading>
  );
}

export default Timer;