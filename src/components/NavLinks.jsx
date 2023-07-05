import { Link } from "react-router-dom";

const NavLinks = ({ navLinks }) => {
  return (
    <section className="flex space-x-4 pl-5 my-3">
      {navLinks.map((obj, index) => {
        const { urlName, path } = obj;

        return (
          <Link key={index} to={path}>
            {urlName}
          </Link>
        );
      })}
    </section>
  );
};

export default NavLinks;
