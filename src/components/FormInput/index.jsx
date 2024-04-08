const FormInput = ({
  type = "text",
  placeholder = "First Name",
  ariaLabel = "first-name",
}) => {
  return <input type={type} placeholder={placeholder} aria-label={ariaLabel} />;
};

export default FormInput;
