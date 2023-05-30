const NavLinks = ({ home }) => {
  return (
    <section className="flex justify-evenly my-3">
      {home.map((link, index) => {
        return (
          <a key={index} href="#">
            {link}
          </a>
        );
      })}
    </section>
  );
};

export default NavLinks;
