import { Grid } from "@mui/material";
import { productsContext } from "../../../App";
import { useContext } from "react";
import TopSection from "./topSection";
import BottomSection from "./bottomSection";

const SupplementsBottom = () => {
  const products = useContext(productsContext);

  return (
    <section>
      <Grid
        container
        display={"grid"}
        gridTemplateColumns={"repeat(3,1fr)"}
        gap={1}
        pt={2}
        px={{ lg: 10, xl: 20, xxl: 40, xxxl: 50 }}
      >
        <TopSection supplements={products && products.supplements} />
        <BottomSection supplements={products && products.supplements} />
      </Grid>
    </section>
  );
};

export default SupplementsBottom;
