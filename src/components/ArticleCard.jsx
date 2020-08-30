import React, { Component } from "react";
import { Link } from "@reach/router";
import { StyledArticleCard } from "../styles/lib";

class ArticleCard extends Component {
  render() {
    return (
      <StyledArticleCard>
        <h2>
          <Link to="/users/:username/article_id">{this.props.title}</Link>
        </h2>
        <p>
          author: <Link to="/users/:username">{this.props.author}</Link>
          <span role="img" aria-label="thumbs-up">
            👍🏽
          </span>{" "}
          : {this.props.votes}
          <span role="img" aria-label="speech-balloon">
            💬
          </span>{" "}
          : {this.props.comment_count}
        </p>
        {/* <p>topic: {this.props.topic}</p> */}
      </StyledArticleCard>
    );
  }
}

export default ArticleCard;
