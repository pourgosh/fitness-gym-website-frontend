import { Box, Button, Grid, Typography } from "@mui/material";

const CostumerCart = ({ cart, removeFromCart }) => {
  return (
    <>
      {cart ? (
        cart.map((elem, i) => {
          return (
            <Grid
              item
              key={i}
              flex={1}
              height={{ xs: 150 }}
              sx={{ border: "2px solid white" }}
              display={"flex"}
            >
              <img
                src={elem.image}
                alt="cart item image"
                style={{ height: "100%", width: "90px" }}
              />
              <Box display={"flex"} flexDirection={"column"} pl={2} pt={1}>
                <Typography variant="string" color={"primary.main"} flex={1}>
                  {elem.title}
                </Typography>

                <Typography variant="string" color={"primary.main"} flex={1}>
                  {elem.price}€
                </Typography>
              </Box>
              <Box
                flex={1}
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Button
                  variant="contained"
                  sx={{
                    height: "15px",
                  }}
                  onClick={() => {
                    removeFromCart(elem);
                  }}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          );
        })
      ) : (
        <h1>empty product.cart!</h1>
      )}
    </>
  );
};

export default CostumerCart;
