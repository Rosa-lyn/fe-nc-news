import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import Deleter from "./Deleter";
import { StyledCommentCard } from "../styles/commentCardStyles";

function CommentCard(props) {
  const { getCommentsByArticleId, article_id, currentUser } = props;
  const { comment_id, body, author, created_at, votes } = props.comment;
  return (
    <StyledCommentCard>
      <p>{body}</p>
      <p>
        <Link to={`/users/${author}`}>{author}</Link> at {created_at}
      </p>
      <Voter votes={votes} id={comment_id} type="comments" />
      {currentUser === author && (
        <Deleter
          comment_id={comment_id}
          getCommentsByArticleId={getCommentsByArticleId}
          article_id={article_id}
        />
      )}
    </StyledCommentCard>
  );
}

export default CommentCard;
