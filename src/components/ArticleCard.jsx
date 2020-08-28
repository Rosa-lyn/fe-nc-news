import React, { Component } from "react";
import { Link } from "@reach/router";

class ArticleCard extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/users/:username/:article_id">article title</Link>
        </h1>
        <p>
          author: <Link to="/users/:username">username</Link>
        </p>
        <p>
          <img src="" alt="thumbs up icon" />: [number of upvotes]
        </p>
        <p>
          <img src="" alt="speech bubble icon" />: [number of comments]
        </p>
      </div>
    );
  }
}

export default ArticleCard;
