import React from "react";
import { NavigationContainer } from "./NavigationStyled";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {mainRoutes.map(({ path, name, exact }) => (
          <li className='navigationListItem' key={path}>
            <NavLink
              to={path}
              exact={exact}
              className='navigationLink'
              activeClassName='activeNavigationLink'>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
