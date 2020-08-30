import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thenewsden.herokuapp.com/api",
});

export const getArticles = (topic, author) => {
  return axiosInstance
    .get("/articles", { params: { topic, author } })
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
