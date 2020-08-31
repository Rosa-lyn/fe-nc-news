import React from "react";
import { Link } from "@reach/router";
import { StyledHeader, StyledLogo } from "../styles/lib";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="The News Den logo" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
