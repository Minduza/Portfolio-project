import PropTypes from "prop-types";
import { InputField, InputItem, InputLabel } from "./Input.styled";

const Input = ({ inputName, placeholder, type, name, onChange }) => {
  return (
    <InputItem>
      <InputLabel htmlFor={name}>{inputName}</InputLabel>
      <InputField
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputItem>
  );
};

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
