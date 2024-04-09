import { Grid, Typography } from "@mui/material";
import PartnersItem from "./partnersItem";

const Partners = () => {
  return (
    <section>
      <Grid container justifyContent={"center"} pt={4}>
        <Typography variant="h1" color={"primary.main"}>
          Partners
        </Typography>
      </Grid>
      <Grid container justifyContent={"space-around"} pt={2}>
        <PartnersItem />
        <PartnersItem />
        <PartnersItem />
      </Grid>
    </section>
  );
};

export default Partners;
