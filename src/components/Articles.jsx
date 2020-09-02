import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Loader from "./Loader";
import { StyledButton } from "../styles/navStyles";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: null,
  };

  componentDidMount() {
    this.getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles().then((articles) => {
        this.setState({ articles });
      });
    }
    if (prevState.sort_by !== this.state.sort_by) {
      this.getArticles().then((articles) => {
        this.setState({ articles });
      });
    }
  }

  getArticles() {
    const { topic, author } = this.props;
    const { sort_by } = this.state;
    return api.getArticles(topic, author, sort_by);
  }

  sortBy = (sortProperty) => {
    this.setState({ sort_by: sortProperty });
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div>
        <div>
          <StyledButton
            onClick={() => {
              this.sortBy("votes");
            }}
          >
            loved
          </StyledButton>
          <StyledButton
            onClick={() => {
              this.sortBy("created_at");
            }}
          >
            recent
          </StyledButton>
          <StyledButton
            onClick={() => {
              this.sortBy("comment_count");
            }}
          >
            talked about
          </StyledButton>
        </div>
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default Articles;

// onClick={(event) => {
//   this.updateVote(1);
// }
