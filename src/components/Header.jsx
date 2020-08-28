import React from "react";
import { Link } from "@reach/router";
import { StyledHeader } from "../styles/lib";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      <h1>The News Den</h1>
    </StyledHeader>
  );
};

export default Header;
