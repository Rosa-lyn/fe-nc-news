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
    sort_by: null,
    p: 1,
    maxPage: Infinity,
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    this.getArticles()
      .then((data) => {
        const { articles, total_count } = data;
        const maxPage = Math.ceil(total_count / 10);
        this.setState({ articles, maxPage, isLoading: false });
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
      this.getArticles().then((data) => {
        const { articles, total_count } = data;
        const { p } = this.state;

        this.setState({ articles, total_count, p });
      });
    }
    if (prevState.sort_by !== this.state.sort_by) {
      this.getArticles().then((data) => {
        const { articles, total_count } = data;
        const { p } = this.state;
        this.setState({ articles, total_count, p });
      });
    }
    if (prevState.p !== this.state.p) {
      this.getArticles().then((data) => {
        const { articles, total_count } = data;
        const { p } = this.state;

        this.setState({ articles, total_count, p });
      });
    }
  }

  getArticles() {
    const { topic, author } = this.props;
    const { sort_by, p } = this.state;
    return api.getArticles(topic, author, sort_by, p);
  }

  sortBy = (sortProperty) => {
    this.setState({ sort_by: sortProperty });
  };

  changePage = (direction) => {
    this.setState((currentState) => {
      return { p: currentState.p + direction };
    });
  };

  render() {
    const { articles, p, maxPage, isLoading, err } = this.state;
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
        <span>
          <button onClick={() => this.changePage(-1)} disabled={p === 1}>
            prev
          </button>{" "}
          {p} of {maxPage}{" "}
          <button onClick={() => this.changePage(1)} disabled={p === maxPage}>
            next
          </button>
        </span>
      </section>
    );
  }
}

export default Articles;
