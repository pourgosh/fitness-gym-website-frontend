import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { productsContext } from "../../../App";
import { useContext, useEffect } from "react";
import LeftSectionTop from "./leftSection";
import RightSectionTop from "./rightSection";

const SingleWearPage = () => {
  const { wearID } = useParams();
  const product = useContext(productsContext);
  const numID = parseInt(wearID);

  useEffect(() => {
    product.getWearsData();
  }, [product]);

  return (
    <main>
      <Grid container pt={{ xs: 12, lg: 15, xl: 17, xxxl: 19 }}>
        <Grid
          item
          flex={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <LeftSectionTop wears={product && product.wears} numID={numID} />
        </Grid>
        <Grid item container flex={1} flexDirection={"column"}>
          <RightSectionTop wears={product && product.wears} numID={numID} />
        </Grid>
      </Grid>
    </main>
  );
};

export default SingleWearPage;
