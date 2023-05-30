import { useEffect, useState } from "react";
import { fetchArtilces } from "../api/api";
import Article from "./Article";

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
        <p>Loading...</p>
      ) : (
        articlesList.map(
          ({ article_id, article_img_url, title, author, created_at }) => {
            return (
              <Article
                key={article_id}
                article_img_url={article_img_url}
                title={title}
                author={author}
                created_at={created_at}
              />
            );
          }
        )
      )}
    </>
  );
};

export default ArticlesList;
