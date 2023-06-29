import { SidebarCard } from "./Sidebar.styled";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <SidebarCard>
      <a href="https://github.com/Minduza" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/mindaugas-purvis-b967aa281"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.facebook.com/mindaugas.purvis/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
    </SidebarCard>
  );
};

export default Sidebar;
