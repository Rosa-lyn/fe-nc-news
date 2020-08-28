import React from "react";
import ArticleCard from "./ArticleCard";
import { StyledArticleList } from "../styles/lib";

const ArticleList = () => {
  return (
    <div>
      <StyledArticleList>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
      </StyledArticleList>
    </div>
  );
};

export default ArticleList;
