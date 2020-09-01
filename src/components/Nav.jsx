import React, { Component } from "react";
import { Link } from "@reach/router";
import {
  StyledButton,
  StyledNavList,
  StyledNavListItem,
} from "../styles/navStyles";
import * as api from "../utils/api";

class Nav extends Component {
  state = {
    topics: [],
    value: "all",
  };

  componentDidMount() {
    this.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  getTopics() {
    return api.getTopics();
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
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

        <StyledButton>hot</StyledButton>
        <StyledButton>new</StyledButton>
        <StyledButton>talked about</StyledButton>
      </nav>
    );
  }
}

export default Nav;
