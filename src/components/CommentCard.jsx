import React, { Component } from "react";
import moment from "moment";
import Voter from "./Voter";
import Deleter from "./Deleter";
import {
  StyledCommentCard,
  StyledButtonsLayout,
} from "../styles/commentCardStyles";
import { SmallerTextP } from "../styles/fontSizes";
import { StyledUserLink } from "../styles/linkStyles";

class CommentCard extends Component {
  state = {
    isDeleted: false,
  };
  deleteComment = () => {
    this.setState({ isDeleted: true });
  };
  render() {
    const { currentUser } = this.props;
    const { comment_id, body, author, created_at, votes } = this.props.comment;
    const { isDeleted } = this.state;
    return (
      <section>
        {isDeleted === true ? (
          <p>Your comment has been deleted</p>
        ) : (
          <StyledCommentCard>
            <p>{body}</p>
            <SmallerTextP>
              <StyledUserLink to={`/users/${author}`}>{author}</StyledUserLink>
            </SmallerTextP>
            <SmallerTextP>
              at {moment(created_at).format("h:mm a")} on{" "}
              {moment(created_at).format("ddd Do MMM YYYY")}
            </SmallerTextP>
            <StyledButtonsLayout>
              <Voter votes={votes} id={comment_id} type="comments" />
              {currentUser === author && (
                <Deleter
                  comment_id={comment_id}
                  deleteComment={this.deleteComment}
                />
              )}
            </StyledButtonsLayout>
          </StyledCommentCard>
        )}
      </section>
    );
  }
}

export default CommentCard;
