import { useContext, useState } from "react";
import FormInput from "../../FormInput";
import { Button } from "@mui/material";
import { productsContext } from "../../../App";

const MembersForm = () => {
  const product = useContext(productsContext);
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <form
      className="membershipForm"
      onSubmit={(e) => {
        product.submitMembersForm(e, member);
      }}
    >
      <FormInput
        value={member.firstName}
        onChange={(e) => {
          setMember({
            ...member,
            firstName: e.target.value,
          });
        }}
      />
      <FormInput
        placeholder="Last Name"
        ariaLabel="last-name"
        value={member.lastName}
        onChange={(e) => {
          setMember({
            ...member,
            lastName: e.target.value,
          });
        }}
      />
      <FormInput
        placeholder="E-mail"
        ariaLabel="email"
        value={member.email}
        onChange={(e) => {
          setMember({
            ...member,
            email: e.target.value,
          });
        }}
      />
      <FormInput
        placeholder="Password"
        type="password"
        ariaLabel="password"
        value={member.password}
        onChange={(e) => {
          setMember({
            ...member,
            password: e.target.value,
          });
        }}
      />
      <Button
        variant={"contained"}
        type="submit"
        sx={{
          alignSelf: "center",
          height: { xs: "20px", md: "25px", xl: "30px" },
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
