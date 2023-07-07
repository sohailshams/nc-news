import DropDown from "./DropDown";
import Header from "./Header";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <>
      <nav className="bg-white text-black py-3 w-screen sticky top-0 z-50 border-solid border-b border-black">
        <Header />
        <div className="flex justify-between items-center">
          <NavLinks
            navLinks={[
              { urlName: "Home", path: "/" },
              { urlName: "Topics", path: "/topics" },
            ]}
          />
          <div className="pr-5">
            <DropDown />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
