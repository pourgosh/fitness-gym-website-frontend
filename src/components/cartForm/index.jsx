import { Box, Button, Grid, Typography } from "@mui/material";
import FormInput from "../FormInput";
import cartBg from "../../assets/Images/cartBg.jpg";
import "./cartForm.css";

const CartForm = ({ clientInfo, setClientInfo, onSubmit }) => {
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
        className="cartForm"
        onSubmit={(e) => {
          onSubmit(e, clientInfo);
        }}
      >
        <FormInput
          type={"text"}
          ariaLabel={"First Name"}
          placeholder={"First-Name"}
          value={clientInfo.firstName}
          onChange={(e) => {
            setClientInfo({
              ...clientInfo,
              firstName: e.target.value,
            });
          }}
        />
        <FormInput
          type={"text"}
          ariaLabel={"Last Name"}
          placeholder={"Last-Name"}
          value={clientInfo.lastName}
          onChange={(e) => {
            setClientInfo({ ...clientInfo, lastName: e.target.value });
          }}
        />
        <FormInput
          type={"text"}
          ariaLabel={"Street"}
          placeholder={"Street"}
          value={clientInfo.address.street}
          onChange={(e) => {
            setClientInfo({
              ...clientInfo,
              address: {
                ...clientInfo.address,
                street: e.target.value,
              },
            });
          }}
        />
        <Box display={"flex"} gap={1} color={"primary.main"}>
          <label>House Number</label>
          <FormInput
            type={"number"}
            ariaLabel={"House-Number"}
            placeholder={"House-Number"}
            value={clientInfo.address.houseNumber}
            onChange={(e) => {
              setClientInfo({
                ...clientInfo,
                address: {
                  ...clientInfo.address,
                  houseNumber: e.target.value,
                },
              });
            }}
          />
        </Box>
        <FormInput
          type={"text"}
          ariaLabel={"City"}
          placeholder={"City"}
          value={clientInfo.address.city}
          onChange={(e) => {
            setClientInfo({
              ...clientInfo,
              address: {
                ...clientInfo.address,
                city: e.target.value,
              },
            });
          }}
        />
        <FormInput
          type={"text"}
          ariaLabel={"Country"}
          placeholder={"Country"}
          value={clientInfo.address.country}
          onChange={(e) => {
            setClientInfo({
              ...clientInfo,
              address: {
                ...clientInfo.address,
                country: e.target.value,
              },
            });
          }}
        />
        <FormInput
          type={"email"}
          ariaLabel={"Email"}
          placeholder={"E-mail"}
          value={clientInfo.address.email}
          onChange={(e) => {
            setClientInfo({
              ...clientInfo,
              email: e.target.value,
            });
          }}
        />
        <Typography variant="list" color={"primary.main"} pt={1}>
          Payment Method
        </Typography>
        <Box py={1} display={"flex"} gap={1} color={"primary.main"}>
          <label>Paypal</label>
          <FormInput
            type="radio"
            ariaLabel="paypal payment method"
            value={"Paypal"}
            name="paymentMehtod"
            checked={clientInfo.paymentMethod === "Paypal"}
            onChange={(e) => {
              setClientInfo({
                ...clientInfo,
                paymentMethod: e.target.value,
              });
            }}
          />
          <label>MasterCard</label>
          <FormInput
            type="radio"
            ariaLabel="paypal payment method"
            value={"Master-Card"}
            name="paymentMehtod"
            checked={clientInfo.paymentMethod === "Master-Card"}
            onChange={(e) => {
              setClientInfo({
                ...clientInfo,
                paymentMethod: e.target.value,
              });
            }}
          />
          <label>Cash</label>
          <FormInput
            type="radio"
            ariaLabel="paypal payment method"
            value={"Cash"}
            name="paymentMehtod"
            checked={clientInfo.paymentMethod === "Cash"}
            onChange={(e) => {
              setClientInfo({
                ...clientInfo,
                paymentMethod: e.target.value,
              });
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            height: { xs: "25px" },
            width: { lg: "50%" },
          }}
          type="submit"
        >
          Buy
        </Button>
      </form>
    </Grid>
  );
};

export default CartForm;
