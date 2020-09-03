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
