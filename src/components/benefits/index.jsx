import { Grid } from "@mui/material";
import studioImg from "../../assets/Images/e39f26bc401fbb15ed4f1902ddbb9fb7.jpg";
import BenefitsHeader from "./benefitsItems/benefitsHeader";
import BenfitsImg from "./benefitsItems/beneftsImg";
import BenfitsList from "./benefitsItems/benefitsList";
import List from "@mui/material/List";
import "./benifts.css";

const Benefits = () => {
  return (
    <section>
      <Grid container pt={4} flexDirection={"column"}>
        <BenefitsHeader />
        <Grid container item>
          <Grid item display={"flex"} flex={4}>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { between: "center" },

                ml: { between: 2, lg: 10, xxl: 16, xxxl: 25 },
              }}
            >
              <BenfitsList label={"24/7 Access"} />

              <BenfitsList />
              <BenfitsList label={"Private Showers"} />
              <BenfitsList label={"Supplements"} />
            </List>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { between: "center" },
              }}
            >
              <BenfitsList label={"Worldwide Club Access"} />

              <BenfitsList label={"Health-Plan discounts"} />

              <BenfitsList label={"Welness Program"} />

              <BenfitsList label={"Massive Community"} />
            </List>
          </Grid>
          <Grid item display={"flex"} justifyContent={"center"} flex={3}>
            <BenfitsImg studioImg={studioImg} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
