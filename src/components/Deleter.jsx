import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils/api";
import { StyledDeleteButton } from "../styles/commentCardStyles";

class Deleter extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleDeleteComment = () => {
    const { comment_id, getCommentsByArticleId, article_id } = this.props;
    return api.deleteComment(comment_id).then(() => {
      getCommentsByArticleId(article_id);
    });
  };
  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <StyledDeleteButton onClick={this.handleDeleteComment}>
        delete
      </StyledDeleteButton>
    );
  }
}

export default Deleter;
