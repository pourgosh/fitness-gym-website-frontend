import { Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <section>
      <Grid container sx={{ color: "#FFFFFF" }} pt={2}>
        <Grid position={"relative"} container item flex={4}>
          <Grid
            item
            width={150}
            height={200}
            position={"absolute"}
            bottom={30}
            left={10}
            sx={{ backgroundColor: "white" }}
          ></Grid>
        </Grid>
        <Grid container item flex={6} flexDirection={"column"}>
          <Grid item>
            <Typography variant="string" align="left">
              Welcome to
            </Typography>
          </Grid>
          <Grid item pl={2}>
            <Typography variant="h6" align="left">
              Mutent Gym
            </Typography>
          </Grid>
          <Grid item paddingTop={1} pl={1} pr={1}>
            <Typography variant="string" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Placerat in egestas erat imperdiet sed. Mi in nulla posuere
              sollicitudin aliquam. Aliquet risus feugiat in ante. Amet justo
              donec enim diam vulputate. Ut etiam sit amet nisl purus in mollis
              nunc sed. Vitae auctor eu augue ut lectus arcu bibendum at.
              Commodo viverra maecenas accumsan lacus vel facilisis volutpat.
              Felis eget velit aliquet sagittis id consectetur.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
