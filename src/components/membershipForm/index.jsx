import { Grid, Typography } from "@mui/material";
import formBgOne from "../../assets/Images/ecf37aa0bee04109855c052d4bed64b9.jpg";
import formBgTwo from "../../assets/Images/images.jpeg";
import MembersForm from "./Form";
import "./membershipForm.css";

const MembershipForm = () => {
  return (
    <section id="membershipSection">
      <Grid container pt={{ xs: 0, sm: 3, lg: 5, xl: 8, xxl: 12, xxxl: 10 }}>
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
          mt={{ xs: 0, sm: 2, md: 3, xl: 8 }}
          position={"relative"}
          width={"100%"}
          sx={{ overflow: "hidden" }}
        >
          <Grid
            item
            display={"flex"}
            justifyContent={"flex-end"}
            flex={1}
            pl={1}
          >
            <img className="memberFormBg commonFilter" src={formBgTwo} />
          </Grid>
          <Grid
            item
            position={"absolute"}
            sx={{
              top: { xs: "10%", sm: "20%", lg: "25%", xxl: "30%" },
              left: {
                xs: "30%",
                sm: "32%",
                md: "35%",
                lg: "36%",
                between2: "41%",
                xxl: "42%",
              },
              zIndex: 100000,
              width: "25%",
            }}
          >
            <MembersForm />
          </Grid>
          <Grid item flex={1} pr={1}>
            <img className="memberFormBg2 commonFilter" src={formBgOne} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default MembershipForm;
