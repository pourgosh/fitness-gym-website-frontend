import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { productsContext } from "../../App";
import { useNavigate } from "react-router-dom";
import RecommendedItems from "../../components/recommendedItems";
import CostumerCart from "./costumerCart";

const CartItemsPage = () => {
  const product = useContext(productsContext);
  const navigate = useNavigate();
  const [wearsStartItem, setWearsStartItem] = useState(3);
  const [wearsEndItem, setWearsEndItem] = useState(7);
  const [supplementsStartItem, setSupplementsStartItem] = useState(3);
  const [supplementsEndItem, setSupplementsEndItem] = useState(7);

  useEffect(() => {
    product.getSupplementData();
    product.getWearsData();
  });

  const totalPrice = (cart) => {
    const total = cart.reduce((acc, elem) => acc + elem.price, 0);
    let stringedNum = total.toString().slice(0, 7);
    let int = Number(stringedNum);
    return int;
  };

  return (
    <main style={{ minHeight: "100dvh" }}>
      <Grid container pt={{ xs: 11, lg: 15, xxxl: 17 }}>
        <Grid item flex={1} display={"flex"} px={{ xs: 2, md: 4, xl: 6 }}>
          <Box flex={1}>
            <Typography variant="h1" color={"primary.main"}>
              Your Items
            </Typography>
          </Box>
          <Box flex={1} display={"flex"} justifyContent={"flex-end"}>
            <Typography variant="h1" color={"primary.main"}>
              {totalPrice(product && product.cart)}€
            </Typography>
          </Box>
        </Grid>
        {/*costumer cart*/}
        <Grid
          item
          container
          flexDirection={"column"}
          gap={1}
          pt={2}
          px={{ md: 15, xl: 30, xxxl: 55, xxxxl: 70 }}
        >
          <CostumerCart
            cart={product.cart}
            removeFromCart={product.removeFromCart}
          />

          <Button
            variant="contained"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Continue to Shop
          </Button>
        </Grid>
      </Grid>
      {/*wears recommendations*/}
      <Grid container flexDirection={"column"} pt={{ xs: 2 }}>
        <Grid
          item
          display={"flex"}
          gap={1}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <RecommendedItems
            items={product.wears && product.wears}
            startItem={wearsStartItem}
            endItem={wearsEndItem}
            navigate={product.navigateToSingleWear}
          />
        </Grid>
        <Grid
          item
          gap={1}
          flex={1}
          display={"flex"}
          justifyContent={"center"}
          pt={{ xs: 2 }}
        >
          <Button
            variant="contained"
            onClick={() => {
              if (wearsStartItem <= 0) {
                setWearsEndItem(4);
                setWearsStartItem(0);
              } else {
                setWearsEndItem(wearsEndItem - 1);
                setWearsStartItem(wearsStartItem - 1);
              }
            }}
          >
            prev
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (wearsEndItem >= product.wears.length - 1) {
                setWearsEndItem(product.wears.length - 1);
                setWearsStartItem(product.wears.length - 5);
              } else {
                setWearsEndItem(wearsEndItem + 1);
                setWearsStartItem(wearsStartItem + 1);
              }
            }}
          >
            next
          </Button>
        </Grid>
      </Grid>
      {/*supplements recommendations*/}
      <Grid container flexDirection={"column"} pt={{ xs: 2 }}>
        <Grid
          item
          display={"flex"}
          gap={1}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <RecommendedItems
            items={product.supplements && product.supplements}
            startItem={supplementsStartItem}
            endItem={supplementsEndItem}
            navigate={product.navigateToSingleSupplement}
          />
        </Grid>
        <Grid
          item
          gap={1}
          flex={1}
          display={"flex"}
          justifyContent={"center"}
          pt={{ xs: 2 }}
        >
          <Button
            variant="contained"
            onClick={() => {
              if (supplementsStartItem <= 0) {
                setSupplementsEndItem(4);
                setWearsStartItem(0);
              } else {
                setSupplementsEndItem(supplementsEndItem - 1);
                setSupplementsStartItem(supplementsStartItem - 1);
              }
            }}
          >
            prev
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (supplementsEndItem >= product.supplements.length - 1) {
                setSupplementsEndItem(product.supplements.length - 1);
                setSupplementsStartItem(product.supplements.length - 5);
              } else {
                setSupplementsEndItem(supplementsEndItem + 1);
                setSupplementsStartItem(supplementsStartItem + 1);
              }
            }}
          >
            next
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default CartItemsPage;
