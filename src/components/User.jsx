import React, { Component } from "react";
import UserProfile from "./UserProfile";
import Articles from "./Articles";
import Loader from "./Loader";
import * as api from "../utils/api";

class User extends Component {
  state = {
    user: {},
    isLoading: true,
  };

  componentDidMount() {
    this.getUser().then((user) => {
      this.setState({ user, isLoading: false });
    });
  }

  getUser() {
    const { username } = this.props;
    return api.getUserByUsername(username);
  }

  render() {
    const { username } = this.props;
    const { user, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div>
        <UserProfile user={user} />
        <Articles author={username} />
      </div>
    );
  }
}

export default User;
