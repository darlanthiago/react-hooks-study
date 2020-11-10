import React, { useEffect, useLayoutEffect, useState } from "react";

// import { Container } from './styles';

function UseLayoutEffectTuto() {
  const [counter, setCounter] = useState(0);

  //   useLayoutEffect(() => {
  //     for (let i = 0; i < 5000; i++) {
  //       console.log(i);
  //     }
  //   }, [counter]);

  useEffect(() => {
    console.log("useeffect 1");
  }, []);

  useEffect(() => {
    console.log("useeffect 2");
  }, []);

  useEffect(() => {
    console.log("useeffect 3");
  }, []);

  useLayoutEffect(() => {
    console.log("uselayouteffect");
  }, []);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
    </>
  );
}

export default UseLayoutEffectTuto;
