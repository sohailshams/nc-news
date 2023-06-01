const ArticleDetail = ({
  articleDetail: { title, body, author, created_at, article_img_url },
}) => {
  return (
    <>
      <h2 className="font-semibold text-4xl mb-3">{title}</h2>
      <p>{body}</p>
      <div className="my-3 flex justify-between">
        <p className="font-bold">By: {author}</p>
        <p>{created_at}</p>
      </div>
      <img src={article_img_url} alt={`Image of topic ${title}`} />
    </>
  );
};

export default ArticleDetail;
