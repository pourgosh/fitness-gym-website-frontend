const NavLogo = ({ logo, displayNav }) => {
  return (
    <img
      onClick={displayNav}
      src={logo}
      style={{
        width: "100%",
      }}
      alt="burger menu icon"
    />
  );
};

export default NavLogo;
