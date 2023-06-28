import { styled } from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

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
export const AboutConent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AboutConentMain = styled.div`
  width: 47%;
`;
export const AboutContentTitle = styled.h2``;
export const AboutContentParagraph = styled.p`
  line-height: 1.8rem;
  font-size: 1.1rem;
`;
export const AboutConentSkills = styled.div``;
export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Skill = styled.div`
  background-color: ${({ theme }) => theme.background.skyblue};
  width: fit-content;
  border-radius: 3px;
  margin: 5px;
  padding: 0.5rem 0.7rem;
  font-weight: 500;
`;
