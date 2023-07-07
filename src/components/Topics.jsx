import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { fetchTopics } from "../api/api";

const Topics = () => {
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setIsLoading(false);
      return setTopicsList(topics);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[30em]">
          <Loader />
        </div>
      ) : (
        <section className="grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 my-10 gap-4 mx-10">
          {topicsList?.map((topicObj) => {
            return (
              <Link
                to={`/?topic=${topicObj.slug}`}
                key={topicObj.slug}
                className="flex items-center border-2 border-black shadow-xl bg-white shadow-2xl h-[150px]"
              >
                <p className="text-lg text-black w-full text-center px-3">
                  {topicObj.description}
                </p>
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Topics;
