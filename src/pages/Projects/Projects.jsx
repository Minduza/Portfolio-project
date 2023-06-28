import { useEffect, useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { ProjectsSection, ProjectsWrap } from "./Projects.styled";
import { getProjects } from "../../api/projects";
import { Link, generatePath } from "react-router-dom";
import { PROJECT_ROUTE } from "../../routes/const";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ProjectsWrap>
      <SectionHeading
        heading="Projects"
        subheading="Here you will find some projects that I created"
      />
      <ProjectsSection>
        {projects.map((project) => (
          <Link
            key={project.id}
            to={generatePath(PROJECT_ROUTE, { id: project.id })} // generatePath tik tada kai naudojam dinaminius routus
            className="single-project"
          >
            <ProjectCard
              title={project.title}
              img={project.imageUrl}
              tools={project.tools}
            />
          </Link>
        ))}
      </ProjectsSection>
    </ProjectsWrap>
  );
};

export default Projects;
