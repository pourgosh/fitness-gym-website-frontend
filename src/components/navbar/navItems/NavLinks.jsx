import { Button } from "@mui/material";

const NavLinks = ({ label = "Home", onClick }) => {
  return (
    <Button
      sx={{ fontFamily: "titleFont", fontSize: { lg: "1.3rem" } }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavLinks;
