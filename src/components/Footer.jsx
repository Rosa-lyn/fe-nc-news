import React from "react";
import { StyledFooter, StyledFooterP } from "../styles/footerStyles";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterP>
        Created by{" "}
        <a
          className="footerLink"
          href="https://rosa-lyn.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rosalyn Land
        </a>
        <br></br> at{" "}
        <a
          className="footerLink"
          href="https://northcoders.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Northcoders
        </a>{" "}
        bootcamp
      </StyledFooterP>
    </StyledFooter>
  );
}

export default Footer;
