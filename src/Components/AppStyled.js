import styled from "styled-components";

const AppWrapper = styled.div`
  button {
    color: #ffffff;
    background-color: #819ff5;
    height: 30px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 50pc;
    outline: none;
    cursor: pointer;
    padding: 0 10px;
    margin: 20px 0;
  }

  button:hover {
    background-color: #5f73a1;
  }

  label {
    font-size: 12px;
    line-height: 20px;
  }
  ul {
    list-style: none;
  }

  input,
  select {
    color: #111111;
    border: 1px solid #819ff5;
    height: 25px;
    border-radius: 14px;
    outline: none;
  }
`;

export default AppWrapper;
