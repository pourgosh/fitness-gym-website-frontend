import { Grid } from "@mui/material";

import CartForm from "../../components/cartForm";
import CartHeader from "../../components/cartHeader";

const CartPage = () => {
  return (
    <main>
      <Grid
        container
        justifyContent={"center"}
        pt={{ xs: 11, lg: 15, xxxl: 17 }}
      >
        <CartHeader />
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
          <CartForm />
        </Grid>
      </Grid>
    </main>
  );
};

export default CartPage;
