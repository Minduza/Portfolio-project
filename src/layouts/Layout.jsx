import PropTypes from "prop-types";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import { Wrapper } from "../components/Wrapper";
import { BgWrap } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <BgWrap>
      <Topbar />
      <Sidebar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </BgWrap>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
