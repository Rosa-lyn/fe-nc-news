import styled from "styled-components";

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 16.7%) auto 1fr;
`;

export const StyledHeader = styled.p`
  display: flex;
  justify-content: flex-start;
  background-color: lightsteelblue;
  padding: 10px;
  margin: 0px;
`;
export const StyledSideBar = styled.div`
  background-color: grey;
`;

export const StyledNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const StyledArticleList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledArticleCard = styled.div`
  border: solid black 1px;
  list-style-type: none;
  margin: 20px;
  border-radius: 10px;
`;

export const StyledFilterBar = styled.div`
  padding: 20px 10px 10px 10px;
`;
