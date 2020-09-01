import React, { Component } from "react";
import UserProfile from "./UserProfile";
import * as api from "../utils/api";
import ArticleList from "./ArticleList";

class User extends Component {
  state = {
    user: {},
    articles: [],
  };

  componentDidMount() {
    this.getUser().then((user) => {
      this.setState({ user });
    });
    this.getArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  getUser() {
    const { username } = this.props;
    return api.getUserByUsername(username);
  }

  getArticles() {
    const { topic, author } = this.props;
    return api.getArticles(topic, author);
  }

  render() {
    const { username } = this.props;
    const { user, articles } = this.state;
    return (
      <div>
        <UserProfile user={user} />
        <ArticleList author={username} articles={articles} />
      </div>
    );
  }
}

export default User;
