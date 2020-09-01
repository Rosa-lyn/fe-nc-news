import React from "react";
import { Link } from "@reach/router";
import { StyledHeader, StyledLogo } from "../styles/headerStyles";
import logo from "../images/logo.png";

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="The News Den logo" />
      </Link>
    </StyledHeader>
  );
}

export default Header;
