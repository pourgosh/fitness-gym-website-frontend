import { Grid, Typography } from "@mui/material";
import wearsImg from "../../assets/Images/products/prod.jpg";
import supplementsImg from "../../assets/Images/products/30860912a45f2f85c4946bba091919d4.jpg";
import ProductItem from "./productItem";
import "./products.css";

const OurProduct = () => {
  return (
    <section>
      <Grid
        container
        mt={{ xs: 4, sm: 5, md: 6, xl: 8, xxl: 12, xxxl: 10 }}
        pb={2}
      >
        <Grid item flex={1} display={"flex"} justifyContent={"center"}>
          <Typography variant="h1" color={"primary.main"} textAlign={"center"}>
            Our Products
          </Typography>
        </Grid>
      </Grid>
      <Grid container flexDirection={"column"}>
        <Grid container item flex={1} display={"flex"}>
          <ProductItem img={wearsImg} />
          <ProductItem
            img={supplementsImg}
            text={"Supplements"}
            alt="Supplements-Image"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default OurProduct;
