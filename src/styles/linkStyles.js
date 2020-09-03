import styled from "styled-components";

import { Link } from "@reach/router";

export const StyledUserLink = styled(Link)`
  text-decoration: underline dotted;
  color: black;
  &:visited {
    color: black;
  }
  &:active {
    color: black;
  }
  &:hover {
    color: #8648ea;
  }
`;
export const StyledNavLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: black;
`;

export const StyledTitleLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
