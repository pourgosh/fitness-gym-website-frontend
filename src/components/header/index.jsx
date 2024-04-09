import { Grid } from "@mui/material";
import heroImg from "../../assets/Images/headereImg.jpg";
const Header = () => {
  return (
    <header>
      <Grid container height={200}>
        <Grid item flex={1} height={200}>
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
