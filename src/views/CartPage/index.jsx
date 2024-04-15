import { Box, Grid, Typography } from "@mui/material";
import myImg from "../../assets/Images/cartBg.jpg";
import CartForm from "../../components/cartForm";

const CartPage = () => {
  return (
    <main>
      <Box
        pt={{ xs: 11, lg: 15, xxxl: 17 }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Typography
          variant="h1"
          color={"primary.main"}
          sx={{
            width: "90%",
          }}
        >
          Place Your Order
        </Typography>
      </Box>
      <Grid container justifyContent={"center"}>
        <Grid
          container
          item
          display={"flex"}
          justifyContent={"center"}
          sx={{
            width: "90%",
            border: { xs: "2px solid #D9D9D9", between: "none" },
          }}
        >
          <Grid
            item
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            pt={{ xs: 5 }}
            sx={{
              minHeight: { xs: "50dvh", md: "70dvh", lg: "80dvh" },
              backgroundImage: `url(${myImg})`,
              backgroundSize: { xs: "cover", between: "contain" },
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <CartForm />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default CartPage;
