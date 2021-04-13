import React, { useState } from "react";
import AppWrapper from "./AppStyled";
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
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
};

export default App;
