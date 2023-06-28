import { styled } from "styled-components";

export const Heading = styled.h1`
  margin-top: 1rem;
  text-align: center;
  text-transform: uppercase;
  &:after {
    content: "";
    display: block;
    height: 6px;
    width: 35px;
    background-color: ${({ theme }) => theme.color.primary};
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 4px;
  }
`;
export const Subheading = styled.h3`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const HeadingSection = styled.div`
  width: 100%;
`;
