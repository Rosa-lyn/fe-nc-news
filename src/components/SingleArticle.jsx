import React, { Component } from "react";
import { Link } from "@reach/router";

class SingleArticle extends Component {
  render() {
    return (
      <div>
        <h1>Article heading</h1>
        <p>
          author: <Link to="/users/:username">username</Link>
        </p>
        <p>here is an article</p>
      </div>
    );
  }
}

export default SingleArticle;
