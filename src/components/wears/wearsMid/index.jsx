import { useContext } from "react";
import { productsContext } from "../../../App";
import { Grid } from "@mui/material";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

const WearsMid = () => {
  const products = useContext(productsContext);
  console.log(products);

  return (
    <section style={{ paddingTop: "30px" }}>
      <Grid
        container
        display={"flex"}
        gap={"1px"}
        px={{ lg: 10, xl: 20, xxl: 40, xxxl: 50 }}
      >
        <Grid item flex={1} display={"flex"} sx={{ background: "white" }}>
          <LeftSection
            wears={products && products.wears}
            navigate={products.navigateToSingleWear}
          />
        </Grid>
        <Grid
          item
          flex={1}
          display={"grid"}
          gap={1}
          gridTemplateColumns={"repeat(2,1fr)"}
          pl={1}
        >
          <RightSection
            wears={products && products.wears}
            navigate={products.navigateToSingleWear}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default WearsMid;
