import FormInput from "../../FormInput";
import { Button } from "@mui/material";

const MembersForm = () => {
  return (
    <form className="membershipForm">
      <FormInput />
      <FormInput placeholder="Last Name" ariaLabel="last-name" />
      <FormInput placeholder="info@contact.com" ariaLabel="email" />
      <FormInput placeholder="Password" type="password" ariaLabel="password" />
      <Button
        variant={"contained"}
        sx={{
          alignSelf: "center",
          height: { xs: "30px" },
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
