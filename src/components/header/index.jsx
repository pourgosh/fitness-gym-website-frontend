import { Grid } from "@mui/material";
import "./header.css";
import heroImg from "../../assets/Images/headereImg.jpg";

const Header = () => {
  return (
    <header>
      <Grid
        container
        height={{ xs: 200, sm: 250, between: 350, md: 400, lg: 700, xl: 1000 }}
      >
        <Grid
          item
          flex={1}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <img
            className="heroImg commonFilter"
            src={heroImg}
            aria-hidden="true"
          />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
