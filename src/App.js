import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import Footer from "./components/Footer";
import { Router, Link } from "@reach/router";

class App extends Component {
  state = {
    currentUser: "jessjelly",
  };
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header />
        <p>
          currently logged in as:{" "}
          <Link to={`/users/${currentUser}`}>{currentUser}</Link>
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
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
