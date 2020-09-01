import React from "react";
import ArticleCard from "./ArticleCard";
import { StyledArticleList } from "../styles/articleListStyles";

function ArticleList({ articles }) {
  return (
    <StyledArticleList>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <ArticleCard
              title={article.title}
              author={article.author}
              votes={article.votes}
              comment_count={article.comment_count}
              article_id={article.article_id}
            />
          </li>
        );
      })}
    </StyledArticleList>
  );
}

export default ArticleList;
