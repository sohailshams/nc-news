import React, { useEffect, useState, useContext } from "react";
import { fetchUsers } from "../api/api";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetchUsers().then((users) => setUsersList(users));
  }, []);

  return (
    <section className="grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 my-10 gap-4 mx-10">
      {usersList.map((userObj) => {
        return (
          <Link
            to={"/"}
            onClick={() => {
              localStorage.setItem("userObj", userObj);
              setUser(userObj);
            }}
            key={userObj.username}
            className="flex flex-col items-center border-2 border-black pt-3 shadow-xl"
          >
            <img className="h-32 w-32" src={userObj.avatar_url} alt="" />
            <h3 className="text-lg text-white bg-black w-full text-center mt-2 py-1">
              {userObj.name}
            </h3>
          </Link>
        );
      })}
    </section>
  );
};

export default SignIn;
