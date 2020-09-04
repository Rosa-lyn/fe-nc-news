import React, { Component } from "react";
import { navigate } from "@reach/router";
import { StyledLoginForm, StyledLoginButton } from "../styles/loginStyles";

class Login extends Component {
  state = {
    user: "",
  };
  handleUserChange = (event) => {
    const user = event.target.value;
    this.setState({ user });
  };
  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { changeUser } = this.props;
    changeUser(user);
    navigate("/");
  };
  render() {
    return (
      <div>
        <StyledLoginForm action="" onSubmit={this.handleLoginSubmit}>
          <label htmlFor="users">Choose a user:</label>
          <select name="users" id="users" onChange={this.handleUserChange}>
            <option value="null"></option>
            <option value="tickle122">tickle122</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="weegembump">weegembump</option>
            <option value="jessjelly">jessjelly</option>
          </select>
          <StyledLoginButton type="submit" value="Login" />
        </StyledLoginForm>
      </div>
    );
  }
}

export default Login;
