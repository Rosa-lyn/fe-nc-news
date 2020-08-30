import React, { Component } from "react";
import ArticleList from "./ArticleList";
import FilterBar from "./FilterBar";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.getArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles().then((articles) => {
        this.setState({ articles });
      });
    }
  }

  getArticles() {
    const { topic, author, sort_by } = this.props;
    return api.getArticles(topic, author, sort_by);
  }

  render() {
    const { articles } = this.state;
    const { sort_by } = this.props;
    return (
      <div>
        <FilterBar sort_by={sort_by} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default Articles;
