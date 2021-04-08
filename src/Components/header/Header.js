import React from "react";
import { courses } from "../../data/courses";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <>
      {/* <Title>Hello</Title>

      <Rectangle>
        <p>Lorem ipsum dolor sit amet.</p>
      </Rectangle> */}
      <HeaderContainer>
        <Navigation routes={courses} />
      </HeaderContainer>
    </>
    
  );
};

export default Header;
