import { useEffect, useState } from "react";
import { ArtilceDetailAndComments } from "../api/api";
import Votes from "./Votes";
import CommentAdder from "./CommentAdder";

const CommentsList = ({ article_id, votes }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const [isErr, setIsErr] = useState(false);

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
        <Votes votes={votes} article_id={article_id} setIsErr={setIsErr} />
        <button
          className="bg-[#eef3f8] py-2 px-3 rounded-md"
          onClick={commentClickHandler}
        >
          Comments
        </button>
      </div>
      <p id="vote-error" value={isErr} className="p-2 mt-3"></p>
      {isCommentClicked ? (
        <>
          <CommentAdder
            setCommentsList={setCommentsList}
            article_id={article_id}
          />
          {commentsList.length > 0 ? (
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
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CommentsList;
