import React, { useRef } from "react";

function UseRefTuto() {
  console.log("rendered");

  const inputRef = useRef(null);

  function handlePrintName() {
    console.log(inputRef.current);
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handlePrintName}>Print Name</button>
    </div>
  );
}

export default UseRefTuto;

/* 

console.log("rendered");

  //   const [number, setNumber] = useState(0);

  const number = useRef(0);

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber;
  }

  function handlePrintValue() {
    alert(number.current);
  }

  return (
    <div>
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handlePrintValue}>Print Value</button>
    </div>
  );


*/
