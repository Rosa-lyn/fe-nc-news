import React, { Component } from "react";
import { Link } from "@reach/router";
import { StyledNavList, StyledNavListItem } from "../styles/navStyles";
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
      <nav>
        <StyledNavList>
          <StyledNavListItem key="all">
            <Link to="/">all</Link>
          </StyledNavListItem>
          {topics.map((topic) => {
            return (
              <StyledNavListItem key={topic.slug}>
                <Link to={`/${topic.slug}`}>{topic.slug}</Link>
              </StyledNavListItem>
            );
          })}
        </StyledNavList>
      </nav>
    );
  }
}

export default Nav;
