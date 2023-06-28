import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../api/projects";
import { Skill, Skills } from "../About/About.styled";
import { FaGithub } from "react-icons/fa";
import {
  Description,
  ImgContainer,
  ProjectImage,
  ProjectSection,
  StyledSpan,
  StyledWrap,
} from "./Project.styled";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const skills = project.tools ?? [];

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <StyledWrap>
      <ProjectSection>
        <ImgContainer>
          <ProjectImage src={project.imageUrl} alt="website screenshot" />
        </ImgContainer>
        <h1>{project.title} </h1>
        <Description>{project.description}</Description>
        <Skills>
          <StyledSpan>Tools Used:</StyledSpan>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Skills>
        <StyledSpan>
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </StyledSpan>
      </ProjectSection>
    </StyledWrap>
  );
};

export default Project;
