import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtilceDetailAndComments } from "../api/api";
import ArticleDetail from "./ArticleDetail";
import { Loader } from "./Loader";

const SingleArticle = () => {
  const [articleDetail, setArticleDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    ArtilceDetailAndComments(article_id).then((articleDetail) =>
      setArticleDetail(articleDetail)
    );
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="w-2/4 mx-auto my-5">
          <ArticleDetail articleDetail={articleDetail} />
        </section>
      )}
    </>
  );
};

export default SingleArticle;
