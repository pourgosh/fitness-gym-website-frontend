import { Grid } from "@mui/material";
import CartForm from "../../components/cartForm";
import CartHeader from "../../components/cartHeader";
import CartItem from "../../components/cartItem";
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(true);

  const cartItemsDisplayer = () => {
    setCartItems(!cartItems);
  };

  return (
    <main>
      <Grid
        container
        justifyContent={"center"}
        pt={{ xs: 11, lg: 15, xxxl: 17 }}
        position={"relative"}
      >
        <CartHeader onClickFunc={cartItemsDisplayer} />
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
        {cartItems && <CartItem />}
      </Grid>
    </main>
  );
};

export default CartPage;
