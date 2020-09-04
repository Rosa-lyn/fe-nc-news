import React from "react";
import { StyledFooter, StyledFooterP } from "../styles/footerStyles";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterP>
        Created by{" "}
        <a className="footerLink" href="https://rosa-lyn.github.io/">
          Rosalyn Land
        </a>
        <br></br> at{" "}
        <a className="footerLink" href="https://northcoders.com/">
          Northcoders
        </a>{" "}
        bootcamp
      </StyledFooterP>
    </StyledFooter>
  );
}

export default Footer;
