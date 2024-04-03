import { Grid } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Grid container height={200}>
        <Grid item flex={1} sx={{ backgroundColor: "red" }}></Grid>
      </Grid>
    </header>
  );
};

export default Header;
