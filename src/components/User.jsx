import React, { Component } from "react";
import UserProfile from "./UserProfile";
import Articles from "./Articles";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import * as api from "../utils/api";

class User extends Component {
  state = {
    user: {},
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    this.getUser()
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        });
      });
  }

  getUser() {
    const { username } = this.props;
    return api.getUserByUsername(username);
  }

  render() {
    const { username } = this.props;
    const { user, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <section>
        <UserProfile user={user} />
        <Articles author={username} />
      </section>
    );
  }
}

export default User;
