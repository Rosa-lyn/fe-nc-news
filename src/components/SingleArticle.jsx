import React, { Component } from "react";
import { Link } from "@reach/router";

class SingleArticle extends Component {
  render() {
    return (
      <div>
        <h2>Article heading</h2>
        <p>
          author: <Link to="/users/:username">username</Link>
        </p>
        <p>here is an article</p>
      </div>
    );
  }
}

export default SingleArticle;
