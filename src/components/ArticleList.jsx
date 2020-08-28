import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
};

export default ArticleList;
