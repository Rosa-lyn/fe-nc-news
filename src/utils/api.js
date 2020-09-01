import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thenewsden.herokuapp.com/api",
});

export const getArticles = (topic, author, sort_by) => {
  return axiosInstance
    .get("/articles", { params: { topic, author, sort_by } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getTopics = () => {
  return axiosInstance.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getUserByUsername = (username) => {
  return axiosInstance.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const getSingleArticle = (article_id) => {
  return axiosInstance.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return axiosInstance.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchVotes = (id, inc_votes, type) => {
  return axiosInstance.patch(`/${type}/${id}`, { inc_votes });
};
