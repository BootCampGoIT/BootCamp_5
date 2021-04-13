import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MainContainer } from "./MainStyled";
import DefaultPage from "../../pages/DefaultPage";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <MainContainer>
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} component={component} key={path} />
        ))}
        <Route component={DefaultPage} />
        {/* <Redirect to="/"/> */}
      </Switch>
    </MainContainer>
  );
};

export default Main;


const courses = {
  "html": {
    module1: {
      section1: {},
      section2: {}
    },
    module2: {
      sections: []
    }
  }
}