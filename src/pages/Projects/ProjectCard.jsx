import PropTypes from "prop-types";
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

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tittoolsle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProjectCard;
