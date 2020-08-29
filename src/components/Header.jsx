import React from "react";
import { Link } from "@reach/router";
import { StyledHeader, StyledTitle } from "../styles/lib";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <span role="img" aria-label="house">
          🏠
        </span>
        <StyledTitle>The News Den</StyledTitle>
      </Link>
    </StyledHeader>
  );
};

export default Header;
