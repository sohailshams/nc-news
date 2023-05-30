import Header from "./Header";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav className="bg-black text-white py-3 w-screen">
      <Header />
      <NavLinks home={["Home", "Topics", "Signin"]} />
    </nav>
  );
};

export default Nav;
