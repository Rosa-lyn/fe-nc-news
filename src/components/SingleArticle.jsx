import React, { Component } from "react";
import { Link } from "@reach/router";
import moment from "moment";
import CommentList from "./CommentList";
import Loader from "./Loader";
import Voter from "./Voter";
import ErrorPage from "./ErrorPage";
import { StyledArticleBody } from "../styles/singleArticleStyles";
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
        // console.log(this.state);
      })
      .catch(({ response }) => {
        console.log(response);
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
      <div>
        <h2>{article.title}</h2>
        <p>{moment(article.created_at).format("dddd Do MMMM YYYY")}</p>
        <p>
          author: <Link to={`/users/${article.author}`}>{article.author}</Link>
        </p>
        <StyledArticleBody>{article.body}</StyledArticleBody>
        <Voter votes={votes} id={article_id} type="articles" />

        <CommentList article_id={article_id} currentUser={currentUser} />
      </div>
    );
  }
}

export default SingleArticle;
