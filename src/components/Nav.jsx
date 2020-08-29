import React, { Component } from "react";
import { Link } from "@reach/router";
import { StyledSideBar, StyledNavList } from "../styles/lib";
import * as api from "../utils/api";

class Nav extends Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    this.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }
  getTopics() {
    return api.getTopics();
  }
  render() {
    const { topics } = this.state;
    return (
      <StyledSideBar>
        <h3>Topics</h3>
        <nav>
          <StyledNavList>
            {topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                </li>
              );
            })}
          </StyledNavList>
        </nav>
      </StyledSideBar>
    );
  }
}

export default Nav;
