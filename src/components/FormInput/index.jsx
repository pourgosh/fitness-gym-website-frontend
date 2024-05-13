import "./dynamicInput.css";

const FormInput = ({
  type = "text",
  placeholder = "First Name",
  ariaLabel = "first-name",
  value,
  onChange,
  checked,
  name = "formInput",
  min = 0,
  max = 1000,
}) => {
  return (
    <input
      className="dynamicInput"
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      checked={checked}
      name={name}
      min={min}
      max={max}
    />
  );
};

export default FormInput;
