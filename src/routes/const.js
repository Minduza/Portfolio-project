import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Porjects/Projects";

export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const PROJECT_ROUTE = "/projects";
export const CONTACT_ROUTE = "/contact";

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
    path: PROJECT_ROUTE,
    Component: <Projects />,
  },
  {
    path: CONTACT_ROUTE,
    Component: <Contact />,
  },
];

export const topbarNavigationItems = [
  { route: HOME_ROUTE, title: "Home" },
  { route: ABOUT_ROUTE, title: "About" },
  { route: PROJECT_ROUTE, title: "Projects" },
  { route: CONTACT_ROUTE, title: "Contact" },
];
