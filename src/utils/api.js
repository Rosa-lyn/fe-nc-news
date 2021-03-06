import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thenewsden.herokuapp.com/api",
});

export const getArticles = (topic, author, sort_by, p) => {
  return axiosInstance
    .get("/articles", { params: { topic, author, sort_by, p } })
    .then((res) => {
      return res.data;
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

export const postComment = (article_id, username, body) => {
  return axiosInstance
    .post(`/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return axiosInstance.delete(`/comments/${comment_id}`);
};
