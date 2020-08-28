import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thenewsden.herokuapp.com/api",
});

export const getArticles = () => {
  return axiosInstance.get("/articles").then((res) => {
    return res.data.articles;
  });
};
