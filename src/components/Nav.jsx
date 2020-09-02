import React, { Component } from "react";
import { Link } from "@reach/router";
import Loader from "./Loader";
import { StyledNavList, StyledNavListItem } from "../styles/navStyles";
import * as api from "../utils/api";

class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  getTopics() {
    return api.getTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <nav>
        <StyledNavList>
          <StyledNavListItem key="all">
            <Link to="/">all</Link>
          </StyledNavListItem>
          {topics.map((topic) => {
            return (
              <StyledNavListItem key={topic.slug}>
                <Link to={`articles/${topic.slug}`}>{topic.slug}</Link>
              </StyledNavListItem>
            );
          })}
        </StyledNavList>
      </nav>
    );
  }
}

export default Nav;
