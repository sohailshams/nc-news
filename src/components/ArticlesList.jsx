import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchArtilces } from "../api/api";
import Article from "./ArticleCard";
import { Loader } from "./Loader";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  let filterByTopic = searchParams.get("topic");
  filterByTopic === null ? (filterByTopic = "") : filterByTopic;

  useEffect(() => {
    fetchArtilces(filterByTopic).then((articles) => {
      setIsLoading(false);
      return setArticlesList(articles);
    });
  }, [filterByTopic]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[30em]">
          <Loader />
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4 mx-10">
          {articlesList?.map(
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
          )}
        </section>
      )}
    </>
  );
};

export default ArticlesList;
