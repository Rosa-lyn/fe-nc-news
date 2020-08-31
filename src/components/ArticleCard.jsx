import React, { Component } from "react";
import { Link } from "@reach/router";
import { StyledArticleCard } from "../styles/lib";

class ArticleCard extends Component {
  render() {
    const { article_id, title, author, comment_count, votes } = this.props;
    return (
      <StyledArticleCard>
        <h3>
          <Link to={`/articles/${article_id}`}>{title}</Link>
        </h3>
        <p>
          author: <Link to={`/users/${author}`}>{author}</Link>
          <span role="img" aria-label="thumbs-up">
            👍🏽
          </span>{" "}
          : {votes}
          <span role="img" aria-label="speech-balloon">
            💬
          </span>{" "}
          : {comment_count}
        </p>
        {/* <p>topic: {this.props.topic}</p> */}
      </StyledArticleCard>
    );
  }
}

export default ArticleCard;
