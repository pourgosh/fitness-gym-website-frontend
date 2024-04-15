import FormInput from "../FormInput";

const CartForm = () => {
  return (
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
  );
};

export default CartForm;
