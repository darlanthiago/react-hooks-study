import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function UseContextTuto() {
  return (
    <ThemeContext.Provider value={{ mode: "dark" }}>
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);

  return <button>{theme.mode}</button>;
}

export default UseContextTuto;
