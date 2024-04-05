import { Grid } from "@mui/material";
import { useState } from "react";
import NavLinks from "./navItems/NavLinks";
import NavLogo from "./navItems/NavLogo";
import burgerIcon from "/burger-menu-svgrepo-com.svg";
import "./navbar.css";

const NavBar = () => {
  const [navItems, setNavItems] = useState(false);

  const displayNav = () => {
    setNavItems(!navItems);
  };
  return (
    <nav className="nav-ss">
      <Grid
        paddingLeft={1}
        paddingRight={1}
        container
        sx={{ backgroundColor: "#212121" }}
      >
        <Grid item flex={1}>
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "white",
            }}
          ></div>
        </Grid>
        <Grid item width={50} height={50} display={"flex"}>
          <NavLogo logo={burgerIcon} displayNav={displayNav} />
        </Grid>
        <Grid container item flexDirection={"column"} alignItems={"center"}>
          {navItems && (
            <Grid item display={"flex"} flexDirection={"column"}>
              <NavLinks label="Membership" />
              <NavLinks label="Contact" />
              <NavLinks label="About" />
              <NavLinks label="Cart" />
              <NavLinks />
            </Grid>
          )}
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;
