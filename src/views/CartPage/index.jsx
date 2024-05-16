import { Grid } from "@mui/material";
import CartForm from "../../components/cartForm";
import CartHeader from "../../components/cartHeader";
import CartItem from "../../components/cartItem";
import { useContext, useState } from "react";
import { productsContext } from "../../App";

const CartPage = () => {
  const product = useContext(productsContext);
  const [cartItems, setCartItems] = useState(true);

  const totalPrice = (cart) => {
    const total = cart.reduce((acc, elem) => acc + elem.price, 0);
    let stringedNum = total.toString().slice(0, 7);
    let int = Number(stringedNum);
    return int;
  };

  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    order: product.cart.map((elem) => {
      return elem._id;
    }),
    address: {
      country: "",
      city: "",
      street: "",
      houseNumber: 0,
    },
    paymentMethod: "",
    totalCost: totalPrice(product.cart),
  });

  const cartItemsDisplayer = () => {
    setCartItems(!cartItems);
  };

  const onSubmit = (e, order) => {
    product.submitOrder(e, order);
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
          <CartForm
            clientInfo={clientInfo}
            setClientInfo={setClientInfo}
            onSubmit={onSubmit}
          />
        </Grid>
        {cartItems && <CartItem totalPrice={totalPrice} />}
      </Grid>
    </main>
  );
};

export default CartPage;
