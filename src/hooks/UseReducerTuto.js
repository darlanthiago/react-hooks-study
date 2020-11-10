import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };
    case "minus":
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };

    default:
      return state;
  }
}

const initialValues = {
  counter: 0,
  clicks: 0,
};

function UseReducerTuto() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  //   console.log(reducer);

  //   const [counter, setCounter] = useState(0);

  function handlePlus() {
    dispatch({ type: "plus" });
  }

  function handleMinus() {
    dispatch({ type: "minus" });
  }

  return (
    <>
      <h1>{state.counter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}

export default UseReducerTuto;
