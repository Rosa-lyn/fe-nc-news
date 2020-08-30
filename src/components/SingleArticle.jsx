import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = {
    article: {},
  };
  componentDidMount() {
    this.getArticle().then((article) => {
      this.setState({ article });
    });
  }
  getArticle() {
    const { article_id } = this.props;
    console.log(article_id);
    return api.getSingleArticle(article_id);
  }
  render() {
    const { article } = this.state;
    console.log(this.props.article_id);
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.created_at}</p>
        <p>
          author: <Link to={`/users/${article.author}`}>{article.author}</Link>
        </p>
        <p>{article.body}</p>
      </div>
    );
  }
}

export default SingleArticle;
