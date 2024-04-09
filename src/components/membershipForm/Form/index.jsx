import FormInput from "../../FormInput";
import { Button } from "@mui/material";

const MembersForm = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(27,26, 25, 85%)",
        height: "70%",
        width: "70%",
        gap: "10px",
        padding: "15px 15px",
      }}
    >
      <FormInput />
      <FormInput placeholder="Last Name" ariaLabel="last-name" />
      <FormInput placeholder="info@contact.com" ariaLabel="email" />
      <FormInput placeholder="Password" type="password" ariaLabel="password" />
      <Button
        variant={"contained"}
        sx={{
          alignSelf: "center",
          height: "25px",
          color: "black",
          textAlign: "center",
          textTransform: "none",
          backgroundColor: "white",
          fontFamily: "textFont",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default MembersForm;
