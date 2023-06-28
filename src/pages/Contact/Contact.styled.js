import { styled } from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledContactForm = styled.form`
  margin-top: 3rem;
  padding: 3rem;
  min-width: 600px;
  background-color: ${({ theme }) => theme.color.light};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
