import { useEffect, useState } from "react";
import { ArtilceDetailAndComments } from "../api/api";

const CommentsList = ({ article_id, votes }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isCommentClicked, setIsCommentClicked] = useState(false);

  const commentClickHandler = () => {
    setIsCommentClicked(true);
  };

  useEffect(() => {
    ArtilceDetailAndComments(article_id, "comments").then((comments) =>
      setCommentsList(comments)
    );
  }, []);
  return (
    <>
      <div className="flex justify-between mt-3 font-bold">
        <p>Votes {votes}</p>
        <button onClick={commentClickHandler}>Comments</button>
      </div>

      {isCommentClicked ? (
        commentsList.length > 0 ? (
          commentsList.map(({ author, comment_id, body, votes }) => {
            return (
              <section key={comment_id} className="bg-[#eef3f8] my-3 p-5">
                <p className="font-bold">{author}:</p>
                <p className="pb-3">{body}</p>
                <p className="font-bold">Votes: {votes}</p>
              </section>
            );
          })
        ) : (
          <p className="bg-[#eef3f8] p-3 mt-3">
            No comments found related to this article!
          </p>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default CommentsList;
