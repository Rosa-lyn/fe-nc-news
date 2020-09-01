import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Nav from "./Nav";
import * as api from "../utils/api";

class Home extends Component {
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
    const { topic, author } = this.props;
    return api.getArticles(topic, author);
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <Nav />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default Home;
