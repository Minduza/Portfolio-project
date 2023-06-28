import { styled } from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.light};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: ${({ theme }) => theme.color.dark};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
