import Header from "./Header";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav className="bg-white text-black py-3 w-screen sticky top-0 z-50 border-solid border-b border-black">
      <Header />
      <NavLinks
        navLinks={[
          { urlName: "Home", path: "/" },
          { urlName: "Topics", path: "/#" },
          { urlName: "Signin", path: "/#" },
        ]}
      />
    </nav>
  );
};

export default Nav;
