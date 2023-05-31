import { Link } from "react-router-dom";

const NavLinks = ({ navLinks }) => {
  return (
    <section className="flex justify-evenly my-3">
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
