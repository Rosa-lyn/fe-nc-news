import React from "react";
import ArticleCard from "./ArticleCard";
import { StyledArticleList } from "../styles/lib";

function ArticleList({ articles, topic }) {
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
              // topic={article.topic}
            />
          </li>
        );
      })}
    </StyledArticleList>
  );
}

export default ArticleList;
