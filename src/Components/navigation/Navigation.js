import React from "react";
import { NavigationContainer } from "./NavigationStyled";


const Navigation = ({routes}) => {
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {routes.map(({ id, name }) => (
          <li key={id} className="navigationListItem">
            <a href={`#${name}`} className="navigationLink">{name}</a>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
