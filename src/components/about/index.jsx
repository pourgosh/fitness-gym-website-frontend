import { Grid, Typography } from "@mui/material";
import aboutImg from "../../assets/Images/aboutImg.jpg";
import "./about.css";
const About = () => {
  return (
    <section id="aboutSection">
      <Grid
        container
        flexDirection={"column"}
        color={"primary.main"}
        pt={{ xs: 1, sm: 2, md: 4 }}
      >
        <Grid
          item
          pl={{
            xs: 20,
            sm: 25,
            between: 35,
            md: 45,
            lg: 70,
            xl: 95,
            xxxl: 120,
          }}
        >
          <Typography variant="list">Welcome To</Typography>
          <Typography
            variant="h1"
            pt={{ xs: 1, xl: 2 }}
            sx={{
              marginLeft: { xs: "20px", xxl: "50px" },
              lineHeight: 1.3,
            }}
          >
            Mutant Fitness
          </Typography>
        </Grid>
      </Grid>
      <Grid container color={"primary.main"}>
        <Grid item flex={3} display={"flex"} justifyContent={"center"}>
          <img
            className="aboutImg commonFilter"
            src={aboutImg}
            aria-hidden="true"
          />
        </Grid>
        <Grid
          item
          flex={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={{ md: 10, xl: 12, xxl: 13, xxxl: 14 }}
          sx={{
            overflow: "auto",
            overflowY: "auto",
            textOverflow: "ellipsis",
            height: {
              xs: "100px",
              between: "150px",
              lg: "fit-content",
            },
          }}
        >
          <Typography
            variant="string"
            align="left"
            pr={{ sm: 5, md: 10, lg: 18, xxl: 20, xxxl: 25 }}
            mt={{ xxl: 10 }}
            sx={{ height: { xs: "60%", xxl: "100%" } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat
            in egestas erat imperdiet sed. Mi in nulla posuere sollicitudin
            aliquam. Aliquet risus feugiat in ante. Amet justo donec enim diam
            vulputate. Ut etiam sit amet nisl purus in mollis nunc sed. Vitae
            auctor eu augue ut lectus arcu bibendum at. Commodo viverra maecenas
            accumsan lacus vel facilisis volutpat. Felis eget velit aliquet
            sagittis id consectetur.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
/*<Grid
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
      </Grid> */
