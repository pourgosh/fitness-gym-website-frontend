import { Button } from "@mui/material";

const NavLinks = ({ label = "Home" }) => {
  return (
    <Button sx={{ fontFamily: "titleFont", fontSize: { lg: "1.3rem" } }}>
      {label}
    </Button>
  );
};

export default NavLinks;
