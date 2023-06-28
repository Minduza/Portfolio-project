import { styled } from "styled-components";

export const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectImage = styled.img`
  width: 100%;
`;

export const ProjectSection = styled.div`
  margin-bottom: 3rem;
  margin-top: 7rem;
  width: 80%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding-bottom: 1rem;
`;
export const ImgContainer = styled.div`
  width: 100%;
`;

export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 3rem;
  margin-right: 1rem;

  svg {
    font-size: 2rem;
    padding-top: 1.2rem;
  }
`;

export const Description = styled.p`
  max-width: 600px;
  padding: 1rem 3rem;
  margin: 0 3rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;
