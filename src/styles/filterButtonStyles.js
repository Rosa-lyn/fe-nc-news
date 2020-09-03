import styled from "styled-components";

export const StyledFilterButton = styled.button`
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

export const StyledFilterSection = styled.section`
  height: auto;
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(3, 1fr);
  margin: 20px 0 10px 0;
`;
