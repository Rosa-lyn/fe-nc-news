import React from "react";
import moment from "moment";
import Voter from "./Voter";
import Deleter from "./Deleter";
import {
  StyledCommentCard,
  StyledButtonsLayout,
} from "../styles/commentCardStyles";
import { SmallerTextP } from "../styles/fontSizes";
import { StyledUserLink } from "../styles/linkStyles";

function CommentCard(props) {
  const { getCommentsByArticleId, article_id, currentUser } = props;
  const { comment_id, body, author, created_at, votes } = props.comment;
  return (
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
            getCommentsByArticleId={getCommentsByArticleId}
            article_id={article_id}
          />
        )}
      </StyledButtonsLayout>
    </StyledCommentCard>
  );
}

export default CommentCard;
