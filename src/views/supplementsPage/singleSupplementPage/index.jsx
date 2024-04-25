import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../../App";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LeftSectionTop from "./leftSection";
import RightSectionTop from "./rightSection";
import DropDownInfo from "./dropDownInfo";
import RecommendedItems from "../../../components/recommendedItems";

const SingleSupplementsPage = () => {
  const { supplementID } = useParams();
  const product = useContext(productsContext);
  const numID = parseInt(supplementID);
  const [suppDirection, setSuppDirection] = useState(false);
  const [suppDescription, setSuppDescription] = useState(false);
  const [alergens, setAlergens] = useState(false);
  const [ingredients, setIngredients] = useState(false);
  const [manufacturer, setManufacturer] = useState(false);
  const [startItem, setStartItem] = useState(10);
  const [endItem, setEndItem] = useState(14);

  useEffect(() => {
    product.getSupplementData();
  }, [product]);

  return (
    <main>
      <section>
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
      </section>
      <section>
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
              alergens={alergens}
              ingredients={ingredients}
              setAlergens={setAlergens}
              setIngredients={setIngredients}
              manufacturer={manufacturer}
              setManufacturer={setManufacturer}
            />
          </Grid>
        </Grid>
      </section>
      <Grid container pt={4}>
        <Grid item display={"flex"} flex={1} justifyContent={"center"}>
          <Typography variant="string" color={"primary.main"}>
            You May Also Like!
          </Typography>
        </Grid>
      </Grid>
      <section>
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
              navigate={product.navigateToSingleSupplement}
              items={product.supplements}
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
              if (endItem >= product.supplements.length - 1) {
                setEndItem(product.supplements.length - 1);
                setStartItem(product.supplements.length - 5);
              } else {
                setEndItem(endItem + 1);
                setStartItem(startItem + 1);
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </section>
    </main>
  );
};

export default SingleSupplementsPage;
