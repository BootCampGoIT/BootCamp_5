import styled from "styled-components";

export const AuthFormContainer = styled.form`
  width: 300px;
  border: 1px solid #819ff5;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  .authFormLabel {
    display: block;
    width: 300px;
  }

  .authFormInput {
    width: 100%;
  }
  .authFormButton {
    width: 100px;
    display: block;
    margin: 20px auto;
  }
`;
