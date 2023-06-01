import CommentsList from "./CommentsList";

const CommentsContainer = ({ article_id, votes }) => {
  return (
    <>
      <CommentsList article_id={article_id} votes={votes} />
    </>
  );
};

export default CommentsContainer;