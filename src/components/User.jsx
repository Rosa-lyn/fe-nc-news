import React, { Component } from "react";
import ArticleList from "./ArticleList";
import UserProfile from "./UserProfile";

class User extends Component {
  render() {
    return (
      <div>
        <UserProfile />
        <ArticleList />
      </div>
    );
  }
}

export default User;
