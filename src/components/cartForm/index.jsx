import { Grid } from "@mui/material";
import FormInput from "../FormInput";
import cartBg from "../../assets/Images/cartBg.jpg";

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
      <form
        style={{
          backgroundColor: "rgba(27, 26, 25, 85%)",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: "30px",
        }}
      >
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
