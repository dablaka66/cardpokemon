import { useState } from "react";
/* import React, {useState} from "react"; */

const useFlip = () =>{
    const [state,setState] = useState(true);
    const toggleState = () =>{
        setState (state => !state)
    };
    return [state,toggleState];
}

export default useFlip;


//++++++++++
/* function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  }; */