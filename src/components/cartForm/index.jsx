import { Grid } from "@mui/material";
import FormInput from "../FormInput";
import cartBg from "../../assets/Images/cartBg.jpg";
import "./cartForm.css";

const CartForm = () => {
  return (
    <Grid
      item
      flex={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={{ xs: 5 }}
      sx={{
        minHeight: { xs: "50dvh", md: "70dvh", lg: "80dvh" },
        backgroundImage: `url(${cartBg})`,
        backgroundSize: { xs: "cover", between: "contain" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <form className="cartForm">
        <FormInput
          type={"text"}
          ariaLabel={"First Name"}
          placeholder={"First-Name"}
        />
        <FormInput
          type={"text"}
          ariaLabel={"Last Name"}
          placeholder={"Last-Name"}
        />
      </form>
    </Grid>
  );
};

export default CartForm;
