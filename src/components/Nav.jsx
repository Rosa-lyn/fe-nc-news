import React, { Component } from "react";
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <div>
        <h3>Topics</h3>
        <nav>
          {/* topic names on the nav bar will be fetched from api */}
          <ul>
            <li>
              <Link to="/topics/football">Football</Link>
            </li>
            <li>
              <Link to="/topics/coding">Coding</Link>
            </li>
            <li>
              <Link to="/topics/cooking">Cooking</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
