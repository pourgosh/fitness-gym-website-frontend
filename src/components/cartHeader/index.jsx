import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartHeader = ({ onClickFunc, headerTitle = "Place Your Order" }) => {
  return (
    <>
      <Grid item display={"flex"} alignItems={"center"} sx={{ width: "90%" }}>
        <Typography
          variant="h1"
          color={"primary.main"}
          sx={{ flex: 1, lineHeight: 2 }}
        >
          {headerTitle}
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Stack>
            <IconButton
              aria-label="Cart"
              sx={{
                color: "primary.main",
              }}
              onClick={onClickFunc}
            >
              <ShoppingCartIcon
                sx={{
                  fontSize: {
                    xs: "2rem",
                    between: "2.3rem",
                    md: "2.8rem",
                    lg: "3rem",
                  },
                }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default CartHeader;
/*<Typography
        variant="h1"
        color={"primary.main"}
        sx={{ flex: 1, lineHeight: 2 }}
      >
        Place Your Order
      </Typography>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Stack>
          <IconButton
            aria-label="Cart"
            sx={{
              color: "primary.main",
            }}
          >
            <ShoppingCartIcon
              sx={{
                fontSize: {
                  xs: "2rem",
                  between: "2.3rem",
                  md: "2.8rem",
                  lg: "3rem",
                },
              }}
            />
          </IconButton>
        </Stack>
      </Box> */
