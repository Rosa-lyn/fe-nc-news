import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class CommentList extends Component {
  state = { comments: [], isLoading: true };
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
    if (isLoading) return <Loader />;
    return (
      <div>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
