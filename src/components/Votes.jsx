import { useEffect, useState } from "react";
import { ArtilceVoteIncDec } from "../api/api";

const Votes = ({ votes, article_id, setIsErr }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [incVote, setIncVote] = useState({});
  const [isDownClicked, setIsDownClicked] = useState(false);
  const [isUpClicked, setIsUpClicked] = useState(false);

  useEffect(() => {
    if (incVote.hasOwnProperty("inc_vote")) {
      ArtilceVoteIncDec(article_id, incVote)
        .then(() => {
          const errorMessage = document.getElementById("vote-error");
          if (errorMessage.getAttribute("value")) {
            errorMessage.innerText = "";
            setIsErr(false);
          }
        })
        .catch((err) => {
          const errorMessage = document.getElementById("vote-error");
          errorMessage.innerText =
            "Sorry something went wrong, please try again!";
          errorMessage.classList.add("bg-red-200");
          if (isDownClicked) {
            setCurrentVotes((currVotes) => currVotes + 1);
          }
          if (isUpClicked) {
            setCurrentVotes((currVotes) => currVotes - 1);
          }
          setIsErr(true);
        });
    }
  }, [incVote]);

  const voteIncHandler = (event) => {
    if (event.currentTarget.getAttribute("value") === "up") {
      setCurrentVotes((currVotes) => currVotes + 1);
      setIncVote({ inc_vote: 1 });
      setIsUpClicked(true);
      setIsDownClicked(false);
    }
    if (event.currentTarget.getAttribute("value") === "down") {
      setCurrentVotes((currVotes) => currVotes - 1);
      setIncVote({ inc_vote: -1 });
      setIsDownClicked(true);
      setIsUpClicked(false);
    }
  };

  useEffect(() => {
    setCurrentVotes(votes);
  }, [votes]);
  return (
    <section className="flex bg-[#eef3f8] py-2 px-3 rounded-md">
      <span className="pr-2">Votes</span>

      <button
        onClick={voteIncHandler}
        value="up"
        disabled={isUpClicked}
        className={isUpClicked ? "text-zinc-400" : "hover:text-orange-600"}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      <span className="mx-2">{currentVotes}</span>
      <button
        onClick={voteIncHandler}
        value="down"
        disabled={isDownClicked}
        className={isDownClicked ? "text-zinc-400" : "hover:text-orange-600"}
      >
        <i className="fa-solid fa-arrow-down"></i>
      </button>
    </section>
  );
};

export default Votes;
