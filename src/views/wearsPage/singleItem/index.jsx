import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { productsContext } from "../../../App";
import { Fragment, useContext, useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LeftSectionTop from "./leftSection";
import RightSectionTop from "./rightSection";
import DropDownInfo from "./dropDownInfo";
import RecommendedItems from "../../../components/recommendedItems";

const SingleWearPage = () => {
  const { wearID } = useParams();
  const product = useContext(productsContext);
  const numID = parseInt(wearID);
  const [manufactur, setManufacture] = useState(false);
  const [description, setDescription] = useState(false);
  const [startItem, setStartItem] = useState(5);
  const [endItem, setEndItem] = useState(9);

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
      <Grid container justifyContent={"center"} pt={10}>
        <Grid
          item
          display={"grid"}
          gridTemplateColumns={"repeat(4,1fr)"}
          justifyContent={"center"}
          alignContent={"center"}
          maxHeight={300}
          gap={5}
        >
          <RecommendedItems
            navigate={product.navigateToSingleWear}
            items={product.wears}
            startItem={startItem}
            endItem={endItem}
          />
        </Grid>
      </Grid>
      <Stack
        direction="row"
        spacing={1}
        display={"flex"}
        justifyContent={"center"}
        pt={3}
      >
        <IconButton
          aria-label="previous-item"
          sx={{ color: "white" }}
          onClick={() => {
            if (startItem <= 0) {
              setEndItem(4);
              setStartItem(0);
            } else {
              setEndItem(endItem - 1);
              setStartItem(startItem - 1);
            }
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          aria-label="next-item"
          sx={{ color: "white" }}
          onClick={() => {
            if (endItem >= product.wears.length - 1) {
              setEndItem(product.wears.length - 1);
              setStartItem(product.wears.length - 5);
            } else {
              setEndItem(endItem + 1);
              setStartItem(startItem + 1);
            }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </main>
  );
};

export default SingleWearPage;
