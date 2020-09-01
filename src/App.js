import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import Footer from "./components/Footer";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Router>
        {/* all articles */}
        <Home path="/" />

        {/* all articles of certain topic */}
        <Home path="/:topic" />

        <User path="/users/:username" />
        <SingleArticle path="articles/:article_id" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
