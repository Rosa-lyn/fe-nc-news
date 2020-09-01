import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import { StyledCommentCard } from "../styles/commentCardStyles";

function CommentCard(props) {
  const { comment_id, body, author, created_at, votes } = props.comment;
  return (
    <StyledCommentCard>
      <p>{body}</p>
      <p>
        <Link to={`/users/${author}`}>{author}</Link> at {created_at}
      </p>
      <Voter votes={votes} id={comment_id} type="comments" />
    </StyledCommentCard>
  );
}

export default CommentCard;
