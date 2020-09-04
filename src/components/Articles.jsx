import React, { Component } from "react";
import ArticleList from "./ArticleList";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import {
  StyledFilterButton,
  StyledFilterSection,
} from "../styles/filterButtonStyles";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: null,
    err: null,
  };

  componentDidMount() {
    this.getArticles()
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        });
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
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <section>
        <StyledFilterSection>
          <StyledFilterButton
            onClick={() => {
              this.sortBy("votes");
            }}
          >
            most loved
          </StyledFilterButton>
          <StyledFilterButton
            onClick={() => {
              this.sortBy("created_at");
            }}
          >
            most recent
          </StyledFilterButton>
          <StyledFilterButton
            onClick={() => {
              this.sortBy("comment_count");
            }}
          >
            most talked about
          </StyledFilterButton>
        </StyledFilterSection>

        <ArticleList articles={articles} />
      </section>
    );
  }
}

export default Articles;
