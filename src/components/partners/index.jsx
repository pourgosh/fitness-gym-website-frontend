import { Grid, Typography } from "@mui/material";
import PartnersItem from "./partnersItem";

const Partners = () => {
  return (
    <section>
      <Grid container justifyContent={"center"} pt={2}>
        <Typography variant="h6" color={"white"}>
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
