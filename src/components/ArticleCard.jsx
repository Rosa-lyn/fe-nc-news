import React from "react";
import moment from "moment";
import {
  StyledArticleCard,
  StyledArticleCardPara,
  StyledUpvotesPara,
} from "../styles/articleCardStyles";
import { StyledUserLink, StyledTitleLink } from "../styles/linkStyles";

function ArticleCard(props) {
  const { article_id, title, author, comment_count, votes, created_at } = props;
  return (
    <StyledArticleCard>
      <h3>
        <StyledTitleLink to={`/articles/${article_id}`}>
          {title}
        </StyledTitleLink>
      </h3>
      <StyledArticleCardPara>
        by <StyledUserLink to={`/users/${author}`}>{author}</StyledUserLink>
      </StyledArticleCardPara>
      <StyledArticleCardPara>
        on {moment(created_at).format("Do MMM YYYY")}
      </StyledArticleCardPara>
      <StyledArticleCardPara>
        <span
          className="far fa-comments"
          role="img"
          aria-label="comments"
        ></span>{" "}
        {comment_count} comments
      </StyledArticleCardPara>
      <StyledUpvotesPara>
        <span
          className="fas fa-arrow-up"
          role="img"
          aria-label="upvotes"
        ></span>{" "}
        {votes} upvotes
      </StyledUpvotesPara>
    </StyledArticleCard>
  );
}

export default ArticleCard;
