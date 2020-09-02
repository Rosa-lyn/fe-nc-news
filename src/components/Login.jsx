import React, { Component } from "react";
import { Redirect } from "@reach/router";

class Login extends Component {
  state = { user: "", userChosen: false };
  handleUserChange = (event) => {
    const user = event.target.value;
    this.setState({ user });
  };
  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { changeUser } = this.props;
    changeUser(user);
    this.setState({ userChosen: true });
  };
  render() {
    const { userChosen } = this.state;
    if (userChosen) return <Redirect from="/login" to="/" />;
    return (
      <div>
        <form action="" onSubmit={this.handleLoginSubmit}>
          <label htmlFor="users">Choose a user to log in as:</label>
          <select name="users" id="users" onChange={this.handleUserChange}>
            <option value="null"></option>
            <option value="tickle122">tickle122</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="weegembump">weegembump</option>
            <option value="jessjelly">jessjelly</option>
          </select>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
