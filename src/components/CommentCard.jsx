import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

function CommentCard(props) {
  const { comment_id, body, author, created_at, votes } = props.comment;
  return (
    <div>
      <h3>
        <Link to={`/users/${author}`}>{author}</Link>{" "}
      </h3>
      <p>{body}</p>
      <p>{created_at}</p>
      <Voter votes={votes} id={comment_id} type="comments" />
    </div>
  );
}

export default CommentCard;
