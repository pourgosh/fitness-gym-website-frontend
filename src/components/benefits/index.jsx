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
      <Grid
        container
        pt={{ xs: 2, sm: 4, md: 6, lg: 10, xl: 8, xxl: 12, xxxl: 10 }}
        flexDirection={"column"}
      >
        <BenefitsHeader />
        <Grid container item>
          <Grid
            item
            display={"flex"}
            justifyContent={{ md: "center", xxl: "space-evenly" }}
            flex={4}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { sm: "center", between: "center" },
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
                justifyContent: {
                  sm: "center",
                  between: "center",
                },
              }}
            >
              <BenfitsList label={"Worldwide Club Access"} />

              <BenfitsList label={"Health-Plan discounts"} />

              <BenfitsList label={"Wellness Program"} />

              <BenfitsList label={"Massive Community"} />
            </List>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={{ xs: "center", md: "flex-start" }}
            flex={3}
            pt={{ xs: 0, sm: 4, lg: 5, xl: 6, xxxl: 7 }}
          >
            <BenfitsImg studioImg={studioImg} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
