import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArtilces } from "../api/api";
import Article from "./ArticleCard";
import { Loader } from "./Loader";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchArtilces().then((articles) => setArticlesList(articles));
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        articlesList.map(
          ({ article_id, article_img_url, title, author, created_at }) => {
            return (
              <Link key={article_id} to={`/articles/${article_id}`}>
                <Article
                  article_img_url={article_img_url}
                  title={title}
                  author={author}
                  created_at={created_at}
                />
              </Link>
            );
          }
        )
      )}
    </>
  );
};

export default ArticlesList;
