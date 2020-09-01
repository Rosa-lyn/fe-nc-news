import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";

class CommentList extends Component {
  state = { comments: [], isLoading: true };
  // get the comments for the article based on its id
  // GET /api/articles/:article_id/comments
  // loop through and display as cards/list items
  componentDidMount() {
    this.getCommentsByArticleId().then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  getCommentsByArticleId() {
    const { article_id } = this.props;
    return api.getCommentsByArticleId(article_id);
  }
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>loading...</p>;
    return (
      <div>
        <CommentCard comment={comments[0]} />
      </div>
    );
  }
}

export default CommentList;
