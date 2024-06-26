import { Grid, Typography } from "@mui/material";
import PartnersItem from "./partnersItem";
import amazonLogo from "../../assets/Images/sponsorLogos/Amazon_icon.svg-removebg-preview.png";
import gorillaMindLogo from "../../assets/Images/sponsorLogos/1d2af5237dbd81fa8d422ffe4f53cc2a.w4000.h6076-removebg-preview.png";
import telekomLogo from "../../assets/Images/sponsorLogos/dl-telekom-logo-01.jpg";
import "./partners.css";

const Partners = () => {
  return (
    <section>
      <Grid
        container
        justifyContent={"center"}
        pt={{ xs: 4, sm: 2, md: 3, xl: 8, xxl: 12, xxxl: 10 }}
      >
        <Typography variant="h1" color={"primary.main"}>
          Partners
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent={{ xs: "space-around", lg: "space-evenly" }}
        mt={{ xs: 2, md: 3, xl: 8, xxl: 12, xxxl: 10 }}
      >
        <PartnersItem img={amazonLogo} alt={"logo of amazon"} />
        <PartnersItem img={gorillaMindLogo} alt={"logo of gorilla-mind"} />
        <PartnersItem img={telekomLogo} alt={"logo of telekom"} />
      </Grid>
    </section>
  );
};

export default Partners;
