import { Grid, Typography } from "@mui/material";
import contactImg from "../../assets/Images/310523071_394048882942854_309032880957984276_n.jpg";
import ContactListItems from "./contactListItems";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contactSection">
      <Grid
        container
        flexDirection={"column"}
        pt={{ xs: 4, sm: 6, md: 8, xxl: 12, xxxl: 10 }}
      >
        <Grid item display={"flex"} justifyContent={"center"} pb={2}>
          <Typography variant="h1" textAlign={"center"} color={"primary.main"}>
            Contact Us
          </Typography>
        </Grid>
        <Grid container item>
          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            flex={1}
            ml={{ between: 2, lg: 10, xxl: 16, xxxl: 25 }}
            pl={{ xxxl: 5 }}
          >
            <ContactListItems />
          </Grid>
          <Grid
            item
            flex={1}
            justifyContent={"center"}
            display={"flex"}
            mr={1}
            mt={{ xs: 1, md: 4, xxl: 8, xxxl: 6 }}
          >
            <img
              className="contactImg commonFilter"
              src={contactImg}
              aria-hidden="true"
            />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
