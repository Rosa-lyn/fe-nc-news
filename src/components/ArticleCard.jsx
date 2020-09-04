import React from "react";
import { StyledArticleCard, NoMarginP } from "../styles/articleCardStyles";
import { StyledUserLink, StyledTitleLink } from "../styles/linkStyles";

function ArticleCard(props) {
  const { article_id, title, author, comment_count, votes } = props;
  return (
    <StyledArticleCard>
      <h3>
        <StyledTitleLink to={`/articles/${article_id}`}>
          {title}
        </StyledTitleLink>
      </h3>
      <NoMarginP>
        by <StyledUserLink to={`/users/${author}`}>{author}</StyledUserLink>
      </NoMarginP>
      <NoMarginP>
        <span
          className="far fa-comments"
          role="img"
          aria-label="comments"
        ></span>{" "}
        {comment_count} comments
      </NoMarginP>
      <NoMarginP>
        <span
          className="fas fa-arrow-up"
          role="img"
          aria-label="upvotes"
        ></span>{" "}
        {votes} upvotes
      </NoMarginP>
    </StyledArticleCard>
  );
}

export default ArticleCard;
