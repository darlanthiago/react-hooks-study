import React, { useState, useMemo } from "react";

// import { Container } from './styles';

function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const total = useMemo(() => {
    console.log("use memo rodou");
    return counter * 319872 * 193872981371;
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <h4>{total}</h4>
      <button onClick={handlePlus}>+</button>

      <br />
      <br />
      <span>{name}</span>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default UseMemo;
