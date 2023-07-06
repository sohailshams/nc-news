const Article = ({ article_img_url, title, author, created_at }) => {
  return (
    <article>
      <img
        className="object-cover w-full h-[250px]"
        src={article_img_url}
        alt={`Image of topic ${title}`}
      />

      <h3 className="font-semibold text-sm mt-2">{title}</h3>

      <section className="flex flex-col space-y-2">
        <p className="mt-2">By: {author}</p>
        <p>{created_at}</p>
      </section>
    </article>
  );
};

export default Article;
