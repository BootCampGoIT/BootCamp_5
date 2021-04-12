import React from "react";
import AuthForm from "../auth/AuthForm";
import Courses from "../courses/Courses";

import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <AuthForm />
      {/* <Courses /> */}
    </MainContainer>
  );
};

export default Main;
