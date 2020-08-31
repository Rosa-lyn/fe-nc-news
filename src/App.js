import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import { MainLayout } from "./styles/lib";

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <Nav />

        <Router>
          {/* all articles */}
          <Articles path="/" />

          {/* all articles of certain topic */}
          <Articles path="/:topic" />

          <User path="/users/:username" />
          <SingleArticle path="articles/:article_id" />
        </Router>
      </MainLayout>
      <Footer />
    </div>
  );
}

export default App;
