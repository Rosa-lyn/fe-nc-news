import React from "react";
import { Link } from "@reach/router";
import {
  StyledHeader,
  StyledLogo,
  StyledWelcomeSection,
} from "../styles/headerStyles";
import { SmallerTextP } from "../styles/fontSizes";
import { StyledUserLink } from "../styles/linkStyles";
import logo from "../images/logo.png";

function Header(props) {
  const { currentUser } = props;
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="The News Den logo" />
      </Link>
      <StyledWelcomeSection>
        Welcome{" "}
        <StyledUserLink to={`/users/${currentUser}`}>
          {currentUser}
        </StyledUserLink>{" "}
        <StyledUserLink to={"/login"}>
          <SmallerTextP>not you?</SmallerTextP>
        </StyledUserLink>
      </StyledWelcomeSection>
    </StyledHeader>
  );
}

export default Header;
