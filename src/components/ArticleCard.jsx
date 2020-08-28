import React, { Component } from "react";
import { Link } from "@reach/router";
import { StyledArticleCard } from "../styles/lib";

class ArticleCard extends Component {
  render() {
    return (
      <StyledArticleCard>
        <h2>
          <Link to="/users/:username/:article_id">article title</Link>
        </h2>
        <p>
          author: <Link to="/users/:username">username</Link>
        </p>
        <p>
          <img src="" alt="thumbs up icon" />: [number of upvotes]
        </p>
        <p>
          <img src="" alt="speech bubble icon" />: [number of comments]
        </p>
      </StyledArticleCard>
    );
  }
}

export default ArticleCard;
