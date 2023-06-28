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

export default Input;
