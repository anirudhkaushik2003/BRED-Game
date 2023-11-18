import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
    INCREMENT_OPP_SCORE,
    DECREMENT_OPP_SCORE,
    UPDATE_OPP_SCORE,
    oppScoreUpdates,
} from "../store/actions";


function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}



const OppScoreCard = () => {

    const dispatch = useDispatch();

    var time = useSelector((state: IGlobalState) => state.timeLeft);
    var oppScore = useSelector((state: IGlobalState) => state.oppScore);
    time = 120 - time;
    const score = useSelector((state: IGlobalState) => state.score);
    var mode = "worse";


    useEffect(() => {
        if (mode == "better") {
            var noise = getRndInteger(-2, 2);
            if (time <= 5) {
                oppScore = Math.floor(1.2 * time)
            }
            else if (time < 20 && time > 5) {
                oppScore = Math.floor(1.7 * (Math.sqrt(10 * time) + getRndInteger(-2, 0)));
            }
            else if (time >= 20) {
                oppScore = Math.floor(1.7 * Math.sqrt(16 * time)) + noise;
            }
        }
        else if (mode == "comparible") {
            if(time <= 5){
                oppScore = Math.floor(1.5 * time)
            }
            else{
                var noise = getRndInteger(-4, 4);
                oppScore = score + noise
            }
            ;
        }
        else if (mode == "worse") { 
            var noise = getRndInteger(-2, 2);
            if (time <= 5) {
                oppScore = Math.floor(1.2 * time)
            }
            
            else  {
                oppScore = Math.floor( Math.sqrt(10 * time)) + noise;
            }


        }
        dispatch(oppScoreUpdates(UPDATE_OPP_SCORE, oppScore));

    }, [time]);




    return (
        <Heading as="h2" size="md" mt={5} mb={5}>Oppo Score: {oppScore}</Heading>
    );
}

export default OppScoreCard;