import { topbarNavigationItems } from "../../routes/const";
import {
  Logo,
  NavItemsContainer,
  Navigation,
  NavItem,
  NavWrap,
} from "./Topbar.styled";

const Topbar = () => {
  return (
    <NavWrap>
      <Navigation>
        <Logo>Logo</Logo>
        <NavItemsContainer>
          {topbarNavigationItems.map((item) => (
            <NavItem key={item.title} to={item.route}>
              {item.title}
            </NavItem>
          ))}
        </NavItemsContainer>
      </Navigation>
    </NavWrap>
  );
};

export default Topbar;
