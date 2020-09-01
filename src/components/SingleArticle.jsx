import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import { StyledArticleBody } from "../styles/singleArticleStyles";

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
    return api.getSingleArticle(article_id);
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.created_at}</p>
        <p>
          author: <Link to={`/users/${article.author}`}>{article.author}</Link>
        </p>
        <StyledArticleBody>{article.body}</StyledArticleBody>
      </div>
    );
  }
}

export default SingleArticle;
