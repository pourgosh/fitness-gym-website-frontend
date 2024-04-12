import { Grid, Typography } from "@mui/material";
import contactImg from "../../assets/Images/310523071_394048882942854_309032880957984276_n.jpg";
import ContactListItems from "./contactListItems";
import "./contact.css";

const Contact = () => {
  return (
    <section>
      <Grid container flexDirection={"column"} pt={4}>
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
          >
            <ContactListItems />
          </Grid>
          <Grid item flex={1} justifyContent={"center"} display={"flex"} mr={1}>
            <img className="contactImg" src={contactImg} aria-hidden="true" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
