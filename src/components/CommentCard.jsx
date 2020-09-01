import React from "react";

function CommentCard(props) {
  const { body, author, created_at, votes } = props.comment;
  return (
    <div>
      <h3>{author}</h3>
      <p>{body}</p>
      <p>{created_at}</p>
      <p>votes: {votes}</p>
    </div>
  );
}

export default CommentCard;
