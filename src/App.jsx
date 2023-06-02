import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesContainer from "./components/ArticlesContainer";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
