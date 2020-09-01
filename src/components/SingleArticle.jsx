import React, { Component } from "react";
import { Link } from "@reach/router";
import CommentList from "./CommentList";
import { StyledArticleBody } from "../styles/singleArticleStyles";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    this.getSingleArticle().then((article) => {
      this.setState({ article });
      // console.log(this.state);
    });
  }

  getSingleArticle() {
    const { article_id } = this.props;
    // console.log(article_id);
    return api.getSingleArticle(article_id);
  }

  render() {
    const { article } = this.state;
    const { article_id } = this.props;
    // console.log(article);
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.created_at}</p>
        <p>
          author: <Link to={`/users/${article.author}`}>{article.author}</Link>
        </p>
        <StyledArticleBody>{article.body}</StyledArticleBody>
        <CommentList article_id={article_id} />
      </div>
    );
  }
}

export default SingleArticle;
