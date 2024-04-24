import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../../App";
import { Grid, Typography } from "@mui/material";
import LeftSectionTop from "./leftSection";
import RightSectionTop from "./rightSection";
import DropDownInfo from "./dropDownInfo";

const SingleSupplementsPage = () => {
  const { supplementID } = useParams();
  const product = useContext(productsContext);
  const numID = parseInt(supplementID);
  const [suppDirection, setSuppDirection] = useState(false);
  const [suppDescription, setSuppDescription] = useState(false);

  useEffect(() => {
    product.getSupplementData();
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
          <LeftSectionTop
            supplements={product && product.supplements}
            numID={numID}
          />
        </Grid>
        <Grid item container flex={1} flexDirection={"column"}>
          <RightSectionTop
            supplements={product && product.supplements}
            numID={numID}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item flex={1} display={"flex"} justifyContent={"center"} pt={2}>
          {product.supplements &&
            product.supplements.map((elem) => {
              if (elem._id === numID) {
                return (
                  <Fragment key={elem._id}>
                    <Typography variant="string" color={"primary.main"}>
                      {elem.price}€
                    </Typography>
                  </Fragment>
                );
              }
            })}
        </Grid>
        <Grid
          item
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <DropDownInfo
            setSuppDescription={setSuppDescription}
            suppDirection={suppDirection}
            setSuppDirection={setSuppDirection}
            suppDescription={suppDescription}
            supplements={product.supplements && product.supplements}
            numID={numID}
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default SingleSupplementsPage;
