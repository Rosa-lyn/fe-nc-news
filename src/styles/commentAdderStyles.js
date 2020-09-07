import styled from "styled-components";

export const StyledCommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const StyledCommentFormSubmitButton = styled.input`
  font-family: "Quicksand", sans-serif;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  background-color: #f2c32c;
  color: black;
  border: none;
  margin: 0 35vw;
  padding: 5px;
  box-shadow: 5px 5px 10px lightgrey;
  &:hover {
    background-color: #e6b40f;
  }
`;
