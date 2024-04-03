import { Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <section>
      {" "}
      <Grid container height={200} sx={{ color: "#FFFFFF" }}>
        <Grid
          position={"relative"}
          container
          item
          flex={4}
          sx={{ backgroundColor: "yellow" }}
        >
          <Grid
            item
            width={150}
            height={200}
            position={"absolute"}
            bottom={50}
            sx={{ backgroundColor: "white" }}
          ></Grid>
        </Grid>
        <Grid
          container
          item
          flex={6}
          flexDirection={"column"}
          sx={{ backgroundColor: "blue" }}
        >
          <Grid item>
            <Typography variant="caption" align="left">
              Welcome to
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="left">
              Mutent Gym
            </Typography>
          </Grid>
          <Grid item paddingTop={1} paddingLeft={3}>
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
