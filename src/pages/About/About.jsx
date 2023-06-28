import React from "react";
import {
  AboutConent,
  AboutConentMain,
  AboutContainer,
  AboutContentParagraph,
  AboutContentTitle,
  Skill,
  Skills,
} from "./About.styled";

import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { CONTACT_ROUTE } from "../../routes/const";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "SASS",
  "Styled-Components",
  "Responsive Design",
  "Express.js",
  "MongoDB",
];

const About = () => {
  return (
    <AboutContainer>
      <SectionHeading
        heading="About me"
        subheading="Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology"
      />
      <AboutConent>
        <AboutConentMain>
          <AboutContentTitle>Get to know me!</AboutContentTitle>
          <AboutContentParagraph>
            <p>
              I'm a passionate frontend developer with a creative mindset and a
              strong eye for detail. With a solid background in web development
              and a love for creating intuitive user experiences, I strive to
              bring ideas to life through elegant and efficient code.
            </p>
            <p>
              I constantly stay up-to-date with the latest trends and
              technologies in the frontend world. I enjoy collaborating with
              cross-functional teams and leveraging my strong communication
              skills to deliver exceptional results. Let's connect and create
              innovative digital experiences together!
            </p>
          </AboutContentParagraph>
          <Link to={CONTACT_ROUTE}>
            <Button fontSize="14">Contact</Button>
          </Link>
        </AboutConentMain>
        <AboutConentMain>
          <AboutContentTitle>My Skills</AboutContentTitle>
          <Skills>
            {skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </Skills>
        </AboutConentMain>
      </AboutConent>
    </AboutContainer>
  );
};

export default About;
