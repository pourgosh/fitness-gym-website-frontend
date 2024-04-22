import { useContext } from "react";
import { productsContext } from "../../../App";
import { Grid } from "@mui/material";
import TopSection from "./topSection";
import BottomSection from "./bottomSection";

const WearsBottom = () => {
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
        <TopSection wears={products && products.wears} />
        <BottomSection wears={products && products.wears} />
      </Grid>
    </section>
  );
};

export default WearsBottom;
