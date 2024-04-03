import { Grid } from "@mui/material";
import burgerIcon from "/burger-menu-svgrepo-com.svg";
import "./navbar.css";
import NavLinks from "./navItems/NavLinks";
import NavLogo from "./navItems/NavLogo";
const NavBar = () => {
  return (
    <>
      <Grid container>
        <Grid container item flexDirection={"column"} alignItems={"flex-end"}>
          <Grid item width={50} height={50} mr={3} display={"flex"}>
            <NavLogo logo={burgerIcon} />
          </Grid>
          <Grid item display={"flex"} flexDirection={"column"}>
            <NavLinks label="Membership" />
            <NavLinks label="Contact" />
            <NavLinks label="About" />
            <NavLinks label="Cart" />
            <NavLinks />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
