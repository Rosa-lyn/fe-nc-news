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
import { SmallerTextP } from "./styles/fontSizes";
import { StyledWelcomeSection } from "./styles/welcomeStyles";
import { StyledUserLink } from "./styles/linkStyles";

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
        <StyledWelcomeSection>
          Welcome{" "}
          <StyledUserLink to={`/users/${currentUser}`}>
            {currentUser}
          </StyledUserLink>{" "}
          <StyledUserLink to={"/login"}>
            <SmallerTextP>not you?</SmallerTextP>
          </StyledUserLink>
        </StyledWelcomeSection>
        <Nav />
        <Router>
          <Articles path="/" />
          <Articles path="/:topic" />
          <User path="/users/:username" />
          <SingleArticle
            path="/articles/:article_id"
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
