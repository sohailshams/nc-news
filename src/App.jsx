import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesContainer from "./components/ArticlesContainer";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
