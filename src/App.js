import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import User from "./components/User";
import SingleArticle from "./components/SingleArticle";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import { Router, Link } from "@reach/router";

class App extends Component {
  state = {
    currentUser: "jessjelly",
  };
  changeUser = (currentUser) => {
    this.setState({ currentUser });
  };
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header />
        <p>
          currently logged in as:{" "}
          <Link to={`/users/${currentUser}`}>{currentUser}</Link>{" "}
        </p>
        <p>
          <Link to={"/login"}>not you?</Link>
        </p>
        <Nav />
        <Router>
          <Articles path="/" />
          <Articles path="/:topic" />
          <User path="/users/:username" />
          <SingleArticle
            path="articles/:article_id"
            currentUser={currentUser}
          />
          <Login path="/login" changeUser={this.changeUser} />
          <ErrorPage status={404} msg={"Path not found! :("} default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
