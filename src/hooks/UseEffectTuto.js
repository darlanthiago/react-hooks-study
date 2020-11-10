import React, { useState, useEffect } from "react";

function UseEffectTuto() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("first render");

    return () => {
      console.log("Vai desmontar");
    };
  }, []);

  useEffect(() => {
    console.log("counter");
  }, [counter]);

  useEffect(() => {
    console.log("name");
  }, [name]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>

      <br />
      <span>{name}</span>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default UseEffectTuto;
