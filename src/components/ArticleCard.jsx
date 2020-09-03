import React from "react";
import { Link } from "@reach/router";
import { StyledArticleCard } from "../styles/articleCardStyles";

function ArticleCard(props) {
  const { article_id, title, author, comment_count } = props;
  return (
    <StyledArticleCard>
      <h3>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <p>
        author: <Link to={`/users/${author}`}>{author}</Link>
      </p>
      <p>
        <span role="img" aria-label="speech-balloon">
          💬
        </span>{" "}
        comments: {comment_count}
      </p>
    </StyledArticleCard>
  );
}

export default ArticleCard;
