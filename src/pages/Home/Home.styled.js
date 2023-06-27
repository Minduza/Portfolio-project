import { styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primary.background};
  color: ${({ theme }) => theme.primary.color};
`;
