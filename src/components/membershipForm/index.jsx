import { Grid, Typography } from "@mui/material";
import formBgOne from "../../assets/Images/ecf37aa0bee04109855c052d4bed64b9.jpg";
import formBgTwo from "../../assets/Images/images.jpeg";
import MembersForm from "./Form";

const MembershipForm = () => {
  return (
    <section>
      <Grid container>
        <Grid
          item
          display={"flex"}
          flex={1}
          justifyContent={"center"}
          pt={4}
          pb={2}
        >
          <Typography variant="h1" color={"primary.main"} textAlign={"center"}>
            Become A Member
          </Typography>
        </Grid>
        <Grid
          container
          item
          position={"relative"}
          width={"100%"}
          height={"280px"}
          sx={{ overflow: "hidden" }}
        >
          <Grid item flex={1} pl={1}>
            <img
              src={formBgTwo}
              style={{ width: "100%", overflow: "hidden" }}
            />
          </Grid>
          <Grid item flex={1} pr={1}>
            <img
              src={formBgOne}
              style={{ width: "100%", transform: "scaleX(-1)" }}
            />
          </Grid>
          <Grid item position={"absolute"} top={50} left={110}>
            <MembersForm />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default MembershipForm;
