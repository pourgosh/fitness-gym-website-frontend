import { Grid, Typography } from "@mui/material";
import MembersForm from "./Form";
import "./membershipForm.css";
import formBgOne from "../../assets/Images/ecf37aa0bee04109855c052d4bed64b9.jpg";
import formBgTwo from "../../assets/Images/images.jpeg";

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
          mt={{ xs: 0, sm: 2, md: 3, xl: 8 }}
          px={{ between: 6, md: 13, lg: 22, xl: 30, xxl: 33, xxxl: 50 }}
          justifyContent={"center"}
          height={{
            sm: 250,
            between: 350,
            md: 450,
            lg: 600,
            xxxl: 800,
          }}
        >
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={1}
            sx={{
              backgroundImage: `url(${formBgOne}),url(${formBgTwo})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left,right",
              backgroundSize: "50%",
              filter: "brightness(0.8) contrast(1)",
            }}
          >
            <MembersForm />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default MembershipForm;
