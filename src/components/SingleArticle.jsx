import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtilceDetailAndComments } from "../api/api";
import ArticleDetail from "./ArticleDetail";
import CommentsContainer from "./CommentsContainer";
import { Loader } from "./Loader";

const SingleArticle = () => {
  const [articleDetail, setArticleDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    ArtilceDetailAndComments(article_id).then((articleDetail) => {
      setArticleDetail(articleDetail);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[30em]">
          <Loader />
        </div>
      ) : (
        <section className="max-[425px]:w-5/6 w-2/4 mx-auto my-5">
          <ArticleDetail articleDetail={articleDetail} />
          <CommentsContainer
            article_id={article_id}
            votes={articleDetail.votes}
          />
        </section>
      )}
    </>
  );
};

export default SingleArticle;
