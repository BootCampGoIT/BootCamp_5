import React, { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const initialState = {
  auth: {
    idToken: "",
    refreshToken: "",
  },
  user: {
    email: "",
  },
};

const App = () => {
  const [state, setState] = useState({ ...initialState });
  const [counter, setCounter] = useState(0);

  const changeState = () => {
    setState({ ...initialState });
  };

  // const increment = () => {
  //   setCounter((prev) => prev + 1);
  // };

  return (
    <>
      <Header />
      <Main />
      <button onClick={changeState}>Change state</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default App;
