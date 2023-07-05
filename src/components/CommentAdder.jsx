import { useState } from "react";
import { AddComments } from "../api/api";
import { useContext } from "react";
import { UserContext } from "../contexts/User.jsx";

const CommentAdder = ({ setCommentsList, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user === null) {
      const errorMessage = document.getElementById("comment-error");
      errorMessage.innerText = "Please Sig In first to add a comment!";
      errorMessage.classList.add("bg-red-200");
      return false;
    }
    if (newComment === " ") {
      const errorMessage = document.getElementById("comment-error");
      errorMessage.innerText = "Comment can not be an empty value!";
      errorMessage.classList.add("bg-red-200");
    } else {
      const newCommentObj = { username: user, body: newComment };
      AddComments(article_id, newCommentObj)
        .then((comment) => {
          setCommentsList((currentCommentsList) => {
            return [comment, ...currentCommentsList];
          });
        })
        .catch((err) => {
          const errorMessage = document.getElementById("comment-error");
          errorMessage.innerText =
            "Sorry something went wrong, please try again!";
          errorMessage.classList.add("bg-red-200");
        });
      setNewComment("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment" className="hidden">
          Add a comment...
        </label>
        <input
          value={newComment}
          type="text"
          id="comment"
          placeholder="Add a comment.."
          className="border-solid border-[1px] border-black py-2 pl-3 rounded-3xl"
          onChange={(event) => setNewComment(event.target.value)}
        />
        {newComment.length > 0 ? (
          <>
            {" "}
            <button
              type="submit"
              className="bg-black mt-2 px-3 text-white rounded-full hover:opacity-[.5]"
            >
              Post
            </button>
          </>
        ) : (
          ""
        )}
      </form>
      <p id="comment-error" className="mt-3 py-2 pl-2"></p>
    </>
  );
};

export default CommentAdder;
