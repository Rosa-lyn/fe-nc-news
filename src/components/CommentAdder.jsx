import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import {
  StyledCommentForm,
  StyledCommentFormSubmitButton,
} from "../styles/commentAdderStyles";

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
      <StyledCommentForm onSubmit={this.handleSubmitComment}>
        <label htmlFor="comment">
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
        </label>
        {isPosting && <p>Your comment is being posted...</p>}
        <StyledCommentFormSubmitButton
          type="submit"
          value="Submit"
          disabled={isPosting === true}
        />
      </StyledCommentForm>
    );
  }
}

export default CommentAdder;
