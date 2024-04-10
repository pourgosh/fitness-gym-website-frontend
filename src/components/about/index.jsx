import { Grid, Typography } from "@mui/material";
import aboutImg from "../../assets/Images/aboutImg.jpg";

const About = () => {
  return (
    <section>
      <Grid
        container
        color={"primary.main"}
        pr={{ md: 5, xl: 0, xxl: 5 }}
        pl={{ md: 5, xl: 0, xxl: 5 }}
        pt={{ xs: 2, sm: 5, lg: 12, xl: 30 }}
      >
        <Grid position={"relative"} container item flex={4}>
          <Grid
            item
            width={{
              xs: 150,
              sm: 170,
              between: 250,
              md: 300,
              lg: 350,
              xl: 600,
            }}
            height={{
              xs: 200,
              sm: 200,
              between: 250,
              md: 300,
              lg: 350,
              xl: 500,
            }}
            position={"absolute"}
            bottom={0}
            left={{ xs: 10, lg: 20, xl: -20, xxl: 0 }}
            sx={{ backgroundColor: "white" }}
          >
            <img
              src={aboutImg}
              aria-hidden="true"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid container item flex={6} flexDirection={"column"}>
          <Grid item pl={{ sm: 2, xl: 8 }} pb={{ lg: 2 }}>
            <Typography variant="list" align="left">
              Welcome to
            </Typography>
          </Grid>
          <Grid item pl={{ xs: 2, sm: 4, xl: 12 }} pt={{ xs: 2, sm: 4 }}>
            <Typography variant="h1" align="left">
              Mutent Gym
            </Typography>
          </Grid>
          <Grid
            item
            paddingTop={1}
            pl={{ xs: 3, xl: 8 }}
            pr={1}
            height={200}
            sx={{
              overflow: "auto",
              overflowY: "scroll",
              textOverflow: "ellipsis",
            }}
          >
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
