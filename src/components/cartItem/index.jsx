import { Box, Grid, IconButton, Stack } from "@mui/material";
import { Fragment, useContext } from "react";
import { productsContext } from "../../App";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = () => {
  const product = useContext(productsContext);

  const cartItem = (item) => {
    return (
      <Box
        key={item._id * Math.floor(Math.random() * 100)}
        position={"relative"}
        sx={{
          width: { xs: "80px", lg: "100px", xxl: "150px" },
          height: { xs: "100px", lg: "120px", xxl: "170px" },
          background: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundColor: "primary.main",
        }}
      ></Box>
    );
  };

  const emptyCart = () => {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        sx={{
          width: { xs: "80px", lg: "100px", xxl: "150px" },
          height: { xs: "100px", lg: "120px", xxl: "170px" },
          backgroundColor: "primary.main",
        }}
      >
        Empty Cart!
      </Box>
    );
  };

  return (
    <Grid
      item
      position={"absolute"}
      top={{ xs: 150, lg: 180, xxxl: 210 }}
      right={{ xs: 10, xl: 30, xxxl: 60, xxxxl: 100 }}
      p={3}
      gap={2}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(27, 26, 25, 85%)",
        overflow: "auto",
        overflowY: "auto",
        zIndex: 100000000000000000000000000000000000000000n,
      }}
    >
      {product.cart.length ? (
        product.cart.map((elem) => {
          return (
            <Fragment key={elem._id * Math.floor(Math.random() * 200)}>
              {cartItem(elem)}
              <Stack
                direction="row"
                spacing={1}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: "100%",
                }}
              >
                <IconButton
                  aria-label="previous-item"
                  sx={{ color: "white", background: "#000000cc" }}
                  onClick={() => {
                    product.removeFromCart(elem);
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </Stack>
            </Fragment>
          );
        })
      ) : !product.cart.length ? (
        <>{emptyCart()}</>
      ) : null}
    </Grid>
  );
};

export default CartItem;
