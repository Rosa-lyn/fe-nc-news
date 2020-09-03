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
import { Router } from "@reach/router";
import { ContentWrap } from "./styles/contentWrap";

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
        <ContentWrap>
          <Header currentUser={currentUser} />
          <Nav />
          <Router>
            <Articles path="/" />
            <Articles path="/articles/topics/:topic" />
            <User path="/users/:username" />
            <SingleArticle
              path="/articles/:article_id"
              currentUser={currentUser}
            />
            <Login path="/login" changeUser={this.changeUser} />
            <ErrorPage status={404} msg={"Path not found! :("} default />
          </Router>
        </ContentWrap>
        <Footer />
      </div>
    );
  }
}

export default App;
