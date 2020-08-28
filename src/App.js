import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import FilterBar from "./components/FilterBar";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <FilterBar />
      <AllArticles />
    </div>
  );
}

export default App;
