import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    commentBody: "",
    isLoading: true,
    isPosting: false,
  };
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  componentDidUpdate() {}
  handleSubmitComment = (event) => {
    event.preventDefault();
    const { commentBody } = this.state;
    this.setState({ isPosting: true });
    if (commentBody !== "") {
      this.postComment(commentBody);
    }
  };
  postComment = (commentBody) => {
    const { article_id, currentUser, postNewComment } = this.props;
    return api
      .postComment(article_id, currentUser, commentBody)
      .then((newComment) => {
        postNewComment(newComment);
        this.setState({ isPosting: false, commentBody: "" });
      });
  };
  getCommentBody = ({ target: { value } }) => {
    const commentBody = value;
    this.setState({ commentBody });
  };
  render() {
    const { isLoading, isPosting, commentBody } = this.state;
    if (isLoading) return <Loader />;
    return (
      <form onSubmit={this.handleSubmitComment}>
        <label htmlFor="comment">comment: </label>
        <textarea
          type="text"
          name="comment"
          id="comment"
          value={commentBody}
          onChange={this.getCommentBody}
          placeholder="leave a comment..."
          required
          rows={6}
        />
        {isPosting && <p>"Your comment is being posted..."</p>}
        <input type="submit" value="Submit" disabled={isPosting === true} />
      </form>
    );
  }
}

export default CommentAdder;
