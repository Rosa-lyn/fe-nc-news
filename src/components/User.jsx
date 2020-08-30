import React, { Component } from "react";
import Articles from "./Articles";
import UserProfile from "./UserProfile";
import * as api from "../utils/api";

class User extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    this.getUser().then((user) => {
      this.setState({ user });
    });
  }
  getUser() {
    const { username } = this.props;
    return api.getUserByUsername(username);
  }
  render() {
    const { username } = this.props;
    const { user } = this.state;
    return (
      <div>
        <UserProfile user={user} />
        <Articles author={username} />
      </div>
    );
  }
}

export default User;
