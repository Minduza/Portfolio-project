import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Project from "../pages/Project/Project";

export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const PROJECTS_ROUTE = "/projects";
export const CONTACT_ROUTE = "/contact";
export const PROJECT_ROUTE = `${PROJECTS_ROUTE}/:id`;

export const routes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: ABOUT_ROUTE,
    Component: <About />,
  },
  {
    path: PROJECTS_ROUTE,
    Component: <Projects />,
  },
  {
    path: PROJECT_ROUTE,
    Component: <Project />,
  },
  {
    path: CONTACT_ROUTE,
    Component: <Contact />,
  },
];

export const topbarNavigationItems = [
  { route: HOME_ROUTE, title: "Home" },
  { route: ABOUT_ROUTE, title: "About" },
  { route: PROJECTS_ROUTE, title: "Projects" },
  { route: CONTACT_ROUTE, title: "Contact" },
];
