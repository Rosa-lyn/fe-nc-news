import React, { Component } from "react";
import moment from "moment";
import CommentList from "./CommentList";
import Loader from "./Loader";
import Voter from "./Voter";
import ErrorPage from "./ErrorPage";
import {
  StyledArticleTitle,
  StyledArticleDate,
  StyledArticleAuthor,
  StyledArticleBody,
} from "../styles/singleArticleStyles";
import { StyledUserLink } from "../styles/linkStyles";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    this.getSingleArticle()
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        });
      });
  }

  getSingleArticle = () => {
    const { article_id } = this.props;
    return api.getSingleArticle(article_id);
  };

  render() {
    const { article, isLoading, err } = this.state;
    const { article_id, currentUser } = this.props;
    const { votes } = this.state.article;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <section>
        <article>
          <StyledArticleTitle>{article.title}</StyledArticleTitle>
          <StyledArticleDate>
            {moment(article.created_at).format("dddd Do MMMM YYYY")}
          </StyledArticleDate>
          <StyledArticleAuthor>
            by{" "}
            <StyledUserLink to={`/users/${article.author}`}>
              {article.author}
            </StyledUserLink>
          </StyledArticleAuthor>
          <StyledArticleBody>{article.body}</StyledArticleBody>
          <Voter votes={votes} id={article_id} type="articles" />
        </article>
        <CommentList article_id={article_id} currentUser={currentUser} />
      </section>
    );
  }
}

export default SingleArticle;
