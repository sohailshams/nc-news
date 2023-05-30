import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-fnpf.onrender.com/api",
});

export function fetchArtilces() {
  return ncNewsApi
    .get("/articles")
    .then((res) => res.data.articles)
    .catch((err) => console.log(err.message));
}
