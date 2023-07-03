import { useEffect, useState } from "react";
import ArticlesList from "./ArticlesList";
import { Loader } from "./Loader";

const ArticlesContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-10 gap-4 mx-10">
      {isLoading ? <Loader /> : <ArticlesList />}
    </section>
  );
};

export default ArticlesContainer;
