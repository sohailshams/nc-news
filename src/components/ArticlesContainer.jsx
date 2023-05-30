import ArticlesList from "./ArticlesList";

const ArticlesContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-10 gap-4 mx-10">
      <ArticlesList />
    </section>
  );
};

export default ArticlesContainer;
