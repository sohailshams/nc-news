import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchArtilces } from "../api/api";
import Article from "./ArticleCard";
import { Loader } from "./Loader";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [orderBy, setOrderBy] = useState("");
  let articlesUrl = "/articles";
  let andOrQues = "?";

  let filterByTopic = searchParams.get("topic");

  if (filterByTopic !== null) {
    articlesUrl += `?topic=${filterByTopic}`;
    andOrQues = "&";
  }

  orderBy ? (articlesUrl += `${andOrQues}order=${orderBy}`) : articlesUrl;

  const orderHandler = (e) => {
    if (e.target.value === "asc") {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("order", e.target.value);
      setSearchParams(newParams);
      setIsChecked(false);
      setOrderBy(e.target.value);
    }
    if (e.target.value === "desc") {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("order", e.target.value);
      setSearchParams(newParams);
      setIsChecked(true);
      setOrderBy(e.target.value);
    }
  };

  useEffect(() => {
    fetchArtilces(articlesUrl).then((articles) => {
      setIsLoading(false);
      return setArticlesList(articles);
    });
  }, [filterByTopic, orderBy]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[30em]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="pl-10 mt-5">
            <div className="flex items-center mb-4">
              <input
                onChange={orderHandler}
                id="default-radio-1"
                type="radio"
                value="asc"
                name="order"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Asc
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={isChecked}
                onChange={orderHandler}
                id="default-radio-2"
                type="radio"
                value="desc"
                name="order"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Desc
              </label>
            </div>
          </div>
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
        </>
      )}
    </>
  );
};

export default ArticlesList;
