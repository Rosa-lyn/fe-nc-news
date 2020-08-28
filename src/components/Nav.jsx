import React, { Component } from "react";
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <div>
        <h3>Topics</h3>
        <nav>
          <ul>
            <li>
              <Link to="">Football</Link>
            </li>
            <li>
              <Link to="">Coding</Link>
            </li>
            <li>
              <Link to="">Cooking</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
