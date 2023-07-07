import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-fnpf.onrender.com/api",
});

export function fetchArtilces(topic) {
  return ncNewsApi
    .get(`/articles?topic=${topic}`)
    .then((res) => res.data.articles)
    .catch((err) => console.log(err.message));
}

export function ArtilceDetailAndComments(articleId, comment = "") {
  return ncNewsApi
    .get(`/articles/${articleId}/${comment}`)
    .then((res) => (comment ? res.data.comments : res.data.article))
    .catch((err) => console.log(err.message));
}

export function ArtilceVoteIncDec(articleId, incVote) {
  return ncNewsApi
    .patch(`/articles/${articleId}`, incVote)
    .then((res) => res.data.updatedArticle);
}

export function AddComments(articleId, newComment) {
  return ncNewsApi
    .post(`/articles/${articleId}/comments`, newComment)
    .then((res) => res.data.comment);
}

export function fetchUsers() {
  return ncNewsApi
    .get("/users")
    .then((res) => res.data.users)
    .catch((err) => console.log(err.message));
}

export function fetchTopics() {
  return ncNewsApi
    .get("/topics")
    .then((res) => res.data.topics)
    .catch((err) => console.log(err.message));
}

fetchTopics();
