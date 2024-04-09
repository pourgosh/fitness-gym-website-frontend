import { Grid, Typography } from "@mui/material";
import contactImg from "../../assets/Images/310523071_394048882942854_309032880957984276_n.jpg";
import ContactListItems from "./contactListItems";

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
          >
            <ContactListItems />
          </Grid>
          <Grid item flex={1}>
            <img
              src={contactImg}
              aria-hidden="true"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
