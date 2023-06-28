import { Skill, Skills } from "../About/About.styled";
import {
  CardParagraph,
  CardWrap,
  ImageContainer,
  ProjectImage,
  ProjectTitle,
  StyledSpan,
} from "./ProjectCard.styled";

const ProjectCard = ({ title, tools, img }) => {
  return (
    <CardWrap>
      <ImageContainer>
        <ProjectImage src={img} alt={title} />
      </ImageContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <CardParagraph>
        <Skills>
          {tools.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Skills>
      </CardParagraph>
    </CardWrap>
  );
};

export default ProjectCard;
