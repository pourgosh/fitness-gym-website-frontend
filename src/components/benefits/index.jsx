import { Grid } from "@mui/material";
import studioImg from "../../assets/Images/e39f26bc401fbb15ed4f1902ddbb9fb7.jpg";
import BenefitsHeader from "./benefitsItems/benefitsHeader";
import BenfitsImg from "./benefitsItems/beneftsImg";
import BenfitsList from "./benefitsItems/benefitsList";
import List from "@mui/material/List";

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
              }}
            >
              <BenfitsList label={"Worldwide Club Access"} />

              <BenfitsList label={"Health-Plan discounts"} />

              <BenfitsList label={"Welness Program"} />
            </List>
          </Grid>
          <Grid item display={"flex"} flex={3} pr={1}>
            <BenfitsImg studioImg={studioImg} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
