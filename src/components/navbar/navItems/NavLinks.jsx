import { Button } from "@mui/material";

const NavLinks = ({ label = "Home" }) => {
  return <Button sx={{ fontFamily: "textFont" }}>{label}</Button>;
};

export default NavLinks;
