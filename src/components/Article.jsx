const Article = ({ article_img_url, title, author, created_at }) => {
  return (
    <article>
      <img src={article_img_url} alt={`Image of topic ${title}`} />
      <h3 className="font-semibold text-lg">{title}</h3>

      <section className="flex justify-between">
        <p>By: {author}</p>
        <p>{created_at}</p>
      </section>
    </article>
  );
};

export default Article;
