import React, { Component } from "react";
import Loader from "./Loader";
import { StyledNavList, StyledNavListItem } from "../styles/navStyles";
import { StyledNavLink } from "../styles/linkStyles";
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
    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: "active" } : {};
    };
    if (isLoading) return <Loader />;
    return (
      <nav>
        <StyledNavList>
          <StyledNavListItem key="all">
            <StyledNavLink to="/" getProps={isActive}>
              all
            </StyledNavLink>
          </StyledNavListItem>
          {topics.map((topic) => {
            return (
              <StyledNavListItem key={topic.slug}>
                <StyledNavLink
                  to={`/articles/topics/${topic.slug}`}
                  getProps={isActive}
                >
                  {topic.slug}
                </StyledNavLink>
              </StyledNavListItem>
            );
          })}
        </StyledNavList>
      </nav>
    );
  }
}

export default Nav;
