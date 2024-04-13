import { Grid } from "@mui/material";
import { useState } from "react";
import "./navbar.css";
import NavLinks from "./navItems/NavLinks";
import NavLogo from "./navItems/NavLogo";
import burgerIcon from "/burger-menu-svgrepo-com.svg";
import mutentIcon from "../../assets/logo.svg";

import "./navbar.css";

const NavBar = () => {
  const [navItems, setNavItems] = useState(false);

  const displayNav = () => {
    setNavItems(!navItems);
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
        height={{ lg: 80 }}
        sx={{ backgroundColor: "primary.sub", position: "fixed" }}
      >
        <Grid item flex={1}>
          <div className="mutentIcon">
            <img
              src={mutentIcon}
              alt="company icon"
              style={{ width: "100%" }}
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
          pt={3}
        >
          <NavLinks label="Membership" />
          <NavLinks label="Contact" />
          <NavLinks label="About" />
          <NavLinks label="Cart" />
          <NavLinks />
        </Grid>
        <Grid container item flexDirection={"column"} alignItems={"center"}>
          {navItems ? (
            <Grid item display={"flex"} flexDirection={"column"}>
              <NavLinks label="Membership" />
              <NavLinks label="Contact" />
              <NavLinks label="About" />
              <NavLinks label="Cart" />
              <NavLinks />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;
