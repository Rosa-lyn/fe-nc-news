import styled from "styled-components";

export const StyledCommentForm = styled.form`
  display: flex;
  flex-direction: column;
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
  &:hover {
    background-color: #e6b40f;
  }
`;
