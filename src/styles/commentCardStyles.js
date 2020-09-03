import styled from "styled-components";

export const StyledCommentCard = styled.div`
  width: 60vw;
  background-color: #f2c32c;
  margin: 10px;
  padding: 10px;
  text-align: left;
`;

export const StyledDeleteButton = styled.button`
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
