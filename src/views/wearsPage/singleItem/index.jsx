import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { productsContext } from "../../../App";
import { Fragment, useContext, useEffect, useState } from "react";
import LeftSectionTop from "./leftSection";
import RightSectionTop from "./rightSection";
import DropDownInfo from "./dropDownInfo";

const SingleWearPage = () => {
  const { wearID } = useParams();
  const product = useContext(productsContext);
  const numID = parseInt(wearID);
  const [manufactur, setManufacture] = useState(false);
  const [description, setDescription] = useState(false);

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
      <Grid container>
        <Grid item flex={1} display={"flex"} justifyContent={"center"} pt={2}>
          {product.wears &&
            product.wears.map((elem) => {
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
            setDescription={setDescription}
            manufactur={manufactur}
            setManufacture={setManufacture}
            description={description}
            wears={product.wears && product.wears}
            numID={numID}
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default SingleWearPage;
