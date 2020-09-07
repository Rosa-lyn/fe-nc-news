import styled from "styled-components";

export const StyledCommentCard = styled.section`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  width: 60vw;
  background-color: #f2c32c;
  margin: 10px;
  padding: 10px;
  text-align: left;
  box-shadow: 5px 5px 10px lightgrey;
`;

export const StyledDeleteButton = styled.button`
  font-family: "Quicksand", sans-serif;
  background-color: #f2c32c;
  color: black;
  border: white 1px solid;
  margin: 10px 5px;
  padding: 5px;
  &:hover {
    background-color: #e6b40f;
  }
`;

export const StyledButtonsLayout = styled.section`
  display: flex;
  justify-content: space-between;
`;
