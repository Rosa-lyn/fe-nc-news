import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thenewsden.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return axiosInstance.get("/articles", { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return axiosInstance.get("/topics").then((res) => {
    return res.data.topics;
  });
};
