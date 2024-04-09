import { Grid, Typography } from "@mui/material";
import testImg from "../../assets/Images/310523071_394048882942854_309032880957984276_n.jpg";
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
        <Grid
          item
          height={175}
          display={"flex"}
          justifyContent={"center"}
          pl={1}
          pr={1}
          gap={2}
        >
          <ProductItem img={testImg} />
          <ProductItem img={testImg} text={"Supplements"} />
        </Grid>
      </Grid>
    </section>
  );
};

export default OurProduct;
