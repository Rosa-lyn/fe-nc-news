import styled from "styled-components";

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 16.7%) 1fr;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2c32c;
  padding: 10px;
  margin: 0px;
`;

export const StyledLogo = styled.img`
  height: 100px;
`;

export const StyledSideBar = styled.div`
  border-right: solid 1px black;
  min-height: 100vh;
`;

export const StyledNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const StyledArticleList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 520px; */
  list-style-type: none;
  padding: 0;
`;

export const StyledArticleCard = styled.div`
  width: 50vw;

  border: solid black 1px;
  list-style-type: none;
  margin: 20px;
  border-radius: 10px;
  padding: 0;
`;

export const StyledFilterBar = styled.div`
  padding: 20px 10px 10px 10px;
`;

export const StyledArticleBody = styled.p`
  margin: 70px;
  line-height: 20pt;
  text-align: left;
`;

export const StyledFooter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2c32c;
  padding: 10px;
  margin: 0;
`;
