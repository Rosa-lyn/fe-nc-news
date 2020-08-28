import React, { Component } from "react";
import { Link } from "@reach/router";
import { StyledSideBar, StyledNavList } from "../styles/lib";

class Nav extends Component {
  render() {
    return (
      <StyledSideBar>
        <h3>Topics</h3>
        <nav>
          {/* topic names on the nav bar will be fetched from api */}
          <StyledNavList>
            <li>
              <Link to="/topics/football">Football</Link>
            </li>
            <li>
              <Link to="/topics/coding">Coding</Link>
            </li>
            <li>
              <Link to="/topics/cooking">Cooking</Link>
            </li>
          </StyledNavList>
        </nav>
      </StyledSideBar>
    );
  }
}

export default Nav;
