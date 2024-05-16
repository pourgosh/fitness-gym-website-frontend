import { Grid } from "@mui/material";
import { useContext } from "react";
import { productsContext } from "../../../App";
import RightSection from "./rightSection";
import LeftSection from "./leftSection";

const SupplementsMiddle = () => {
  const products = useContext(productsContext);

  return (
    <section style={{ paddingTop: "30px" }}>
      <Grid
        container
        display={"flex"}
        gap={"1px"}
        px={{ lg: 10, xl: 20, xxl: 40, xxxl: 50 }}
      >
        <Grid
          item
          flex={1}
          display={"grid"}
          gap={1}
          gridTemplateColumns={"repeat(2,1fr)"}
          pl={1}
        >
          <LeftSection
            supplements={products && products.supplements}
            navigate={products.navigateToSingleSupplement}
          />
        </Grid>
        <Grid item flex={1} display={"flex"}>
          <RightSection
            supplements={products && products.supplements}
            navigate={products.navigateToSingleSupplement}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default SupplementsMiddle;
