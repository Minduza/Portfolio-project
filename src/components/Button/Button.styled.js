import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.light};
  font-size: ${(props) => props.fontSize}px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 1rem 4.4rem;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    padding: 1rem 4.5rem;
    letter-spacing: 4px;
  }
`;
