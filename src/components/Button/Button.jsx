import { StyledButton } from "./Button.styled";

const Button = ({ children, fontSize, onClick, type }) => {
  return (
    <StyledButton type={type} fontSize={fontSize} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
