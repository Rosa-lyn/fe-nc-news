import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 35vw;
`;
export const StyledLoginButton = styled.input`
  font-family: "Quicksand", sans-serif;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  background-color: #f2c32c;
  color: black;
  border: none;
  margin: 5px;
  padding: 5px;
  &:hover {
    background-color: #e6b40f;
  }
`;
