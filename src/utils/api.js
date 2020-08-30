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
