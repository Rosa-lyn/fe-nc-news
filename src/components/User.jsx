import React, { Component } from "react";
import UserProfile from "./UserProfile";
import ArticleList from "./ArticleList";
import Loader from "./Loader";
import * as api from "../utils/api";

class User extends Component {
  state = {
    user: {},
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getUser().then((user) => {
      this.setState({ user });
    });
    this.getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
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
    const { user, articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div>
        <UserProfile user={user} />
        <ArticleList author={username} articles={articles} />
        {/* put home component instead of article list, then we don't need getarticles in here */}
      </div>
    );
  }
}

export default User;
