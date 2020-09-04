import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import CommentAdder from "./CommentAdder";
import { StyledCommentList } from "../styles/commentListStyles";
import * as api from "../utils/api";

class CommentList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    this.getCommentsByArticleId().then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  getCommentsByArticleId = () => {
    const { article_id } = this.props;
    return api.getCommentsByArticleId(article_id);
  };
  postNewComment = (newComment) => {
    const { comments } = this.state;
    this.setState({ comments: [newComment, ...comments] });
  };

  render() {
    const { comments, isLoading } = this.state;
    const { article_id, currentUser } = this.props;
    if (isLoading) return <Loader />;
    return (
      <section>
        <CommentAdder
          article_id={article_id}
          currentUser={currentUser}
          postNewComment={this.postNewComment}
        />
        {comments.map((comment) => {
          return (
            <StyledCommentList key={comment.comment_id}>
              <CommentCard
                comment={comment}
                getCommentsByArticleId={this.getCommentsByArticleId}
                currentUser={currentUser}
              />
            </StyledCommentList>
          );
        })}
      </section>
    );
  }
}

export default CommentList;
