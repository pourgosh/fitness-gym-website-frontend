import { Grid } from "@mui/material";
import heroImg from "../../assets/Images/headereImg.jpg";
const Header = () => {
  return (
    <header>
      <Grid container height={{ xs: 200, sm: 350, md: 550, lg: 700, xl: 900 }}>
        <Grid item flex={1} height={"100%"}>
          <img
            src={heroImg}
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
