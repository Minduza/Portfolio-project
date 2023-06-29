import { Skill, Skills } from "../About/About.styled";
import {
  CardParagraph,
  CardWrap,
  ImageContainer,
  ProjectImage,
  ProjectTitle,
} from "./ProjectCard.styled";

const ProjectCard = ({ title, tools, imgUrl, alt }) => {
  return (
    <CardWrap>
      <ImageContainer>
        <ProjectImage src={imgUrl} alt={alt} />
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
