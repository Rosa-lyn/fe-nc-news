import React, { Component } from "react";
import ArticleList from "./ArticleList";
import FilterBar from "./FilterBar";

class Articles extends Component {
  render() {
    return (
      <div>
        <FilterBar />
        <ArticleList />
      </div>
    );
  }
}

export default Articles;
