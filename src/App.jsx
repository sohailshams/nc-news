import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ArticlesContainer from "./components/ArticlesContainer";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import SignIn from "./components/SignIn";
import { useContext } from "react";
import { UserContext } from "./contexts/User";
import Topics from "./components/Topics";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />

        <Route
          path="/signin"
          element={user === null ? <SignIn /> : <Navigate to="/" />}
        />

        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
