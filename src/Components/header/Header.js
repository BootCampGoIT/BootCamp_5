import React from "react";
import { courses } from "../../data/courses";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation routes={courses} />
    </HeaderContainer>
  );
};

export default Header;
