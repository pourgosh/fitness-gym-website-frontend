import { Grid, Typography } from "@mui/material";
import wearsImg from "../../assets/Images/products/8a9274641da13334c9e66a50ef8c9edf.jpg";
import supplementsImg from "../../assets/Images/products/30860912a45f2f85c4946bba091919d4.jpg";
import ProductItem from "./productItem";

const OurProduct = () => {
  return (
    <section>
      <Grid container flexDirection={"column"} pt={4}>
        <Grid item pb={2}>
          <Typography variant="h1" color={"primary.main"} textAlign={"center"}>
            Our Products
          </Typography>
        </Grid>
        <Grid item height={200} display={"flex"} pl={1} pr={1} gap={2}>
          <ProductItem img={wearsImg} />
          <ProductItem img={supplementsImg} text={"Supplements"} />
        </Grid>
      </Grid>
    </section>
  );
};

export default OurProduct;
