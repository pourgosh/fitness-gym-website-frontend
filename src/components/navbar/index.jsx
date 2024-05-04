import { Grid } from "@mui/material";
import { useState } from "react";
import "./navbar.css";
import NavLinks from "./navItems/NavLinks";
import NavLogo from "./navItems/NavLogo";
import burgerIcon from "/burger-menu-svgrepo-com.svg";
import mutentIcon from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [navItems, setNavItems] = useState(false);
  const navigate = useNavigate();

  const displayNav = () => {
    setNavItems(!navItems);
  };

  const scrollTo = async (section) => {
    if (window.location.pathname !== "/") {
      await navigate("/");
      const sectionToScroll = document.querySelector(section);
      sectionToScroll.scrollIntoView({ behavior: "smooth" });
    }
    const sectionToScroll = document.querySelector(section);
    sectionToScroll.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="nav-ss"
      style={{ position: "relative", width: "100%", zIndex: 100000000000000 }}
    >
      <Grid
        pl={{ xs: 1, md: 7, lg: 10 }}
        pr={{ xs: 1, md: 7 }}
        container
        py={1.5}
        sx={{ backgroundColor: "primary.sub", position: "fixed" }}
      >
        <Grid item flex={1}>
          <div className="mutentIcon">
            <img
              src={mutentIcon}
              alt="company icon"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          width={50}
          height={50}
          display={{ xs: "flex", lg: "none" }}
          className="burgerMenuImg"
        >
          <NavLogo logo={burgerIcon} displayNav={displayNav} />
        </Grid>
        <Grid
          item
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          pt={1}
        >
          <NavLinks
            label="Products"
            onClick={() => {
              scrollTo("#productsSection");
            }}
          />
          <NavLinks
            label="Membership"
            onClick={() => {
              scrollTo("#membershipSection");
            }}
          />
          <NavLinks
            label="Contact"
            onClick={() => {
              scrollTo("#contactSection");
            }}
          />
          <NavLinks
            label="About"
            onClick={() => {
              scrollTo("#aboutSection");
            }}
          />
          <NavLinks
            label="Cart"
            onClick={() => {
              navigate("/cart");
            }}
          />

          <NavLinks
            onClick={() => {
              navigate("/");
            }}
          />
        </Grid>
        <Grid container item flexDirection={"column"} alignItems={"center"}>
          {navItems ? (
            <Grid item display={"flex"} flexDirection={"column"}>
              <NavLinks
                label="Products"
                onClick={() => {
                  scrollTo("#productsSection");
                }}
              />
              <NavLinks
                label="Membership"
                onClick={() => {
                  scrollTo("#membershipSection");
                }}
              />
              <NavLinks
                label="Contact"
                onClick={() => {
                  scrollTo("#contactSection");
                }}
              />
              <NavLinks
                label="About"
                onClick={() => {
                  scrollTo("#aboutSection");
                }}
              />
              <NavLinks
                label="Cart"
                onClick={() => {
                  navigate("/cart");
                }}
              />
              <NavLinks
                onClick={() => {
                  navigate("/");
                }}
              />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;
