import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { StyledArticleList } from "../styles/lib";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidMount = () => {
    this.getArticles().then((articles) => {
      this.setState({ articles });
    });
  };

  getArticles = () => {
    return api.getArticles();
  };
  render() {
    const { articles } = this.state;
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
              />
            </li>
          );
        })}
      </StyledArticleList>
    );
  }
}

export default ArticleList;
