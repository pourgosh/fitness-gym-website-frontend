import { Box, Grid } from "@mui/material";

const CartItem = () => {
  const testFunc = () => {
    return (
      <Box
        sx={{
          width: { xs: "80px", lg: "100px", xxl: "150px" },
          height: { xs: "80px", lg: "100px", xxl: "150px" },
          backgroundColor: "primary.main",
        }}
      ></Box>
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
      {testFunc()}
      {testFunc()}
      {testFunc()}
    </Grid>
  );
};

export default CartItem;
