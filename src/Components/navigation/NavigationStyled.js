import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;

  .navigationList {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .navigationListItem:not(:last-child) {
    margin-right: 25px;
  }

  .navigationLink {
    text-decoration: none;
    text-transform: uppercase;
  }
`;
