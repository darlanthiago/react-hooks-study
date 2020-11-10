import React, { useState, useCallback } from "react";

// import { Container } from './styles';

const fnCounter = new Set();

function UseCallbackTuto() {
  const [counter, setCounter] = useState(0);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  //   function handlePlus() {
  //     setCounter((prevState) => prevState + 1);
  //   }

  fnCounter.add(handlePlus);
  console.log(fnCounter.size);

  return (
    <>
      <h1>{counter}</h1>

      <Button onClick={handlePlus} />
    </>
  );
}

function Button({ onClick }) {
  return <button onClick={onClick}>+</button>;
}

export default UseCallbackTuto;
