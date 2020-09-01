import React, { Component } from "react";
import { Link } from "@reach/router";
import CommentList from "./CommentList";
import Loader from "./Loader";
import { StyledArticleBody } from "../styles/singleArticleStyles";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    this.getSingleArticle().then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  getSingleArticle() {
    const { article_id } = this.props;
    return api.getSingleArticle(article_id);
  }

  render() {
    const { article, isLoading } = this.state;
    const { article_id } = this.props;
    if (isLoading) return <Loader />;
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
