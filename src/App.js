import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Nav />

        <Router>
          {/* all articles */}
          <Articles path="/" />

          {/* all articles of certain topic */}
          <Articles path="/topics/:topic_slug" />

          <User path="/users/:username" />
          <SingleArticle path="/users/:username/:article_id" />
        </Router>
      </main>
    </div>
  );
}

export default App;
