import { topbarNavigationItems } from "../../routes/const";
import { Link } from "react-router-dom";
import { Logo, NavItems, Navigation } from "./Topbar.styled";

const Topbar = () => {
  return (
    <Navigation>
      <Logo>Logo</Logo>
      <NavItems>
        {topbarNavigationItems.map((item) => (
          <Link key={item.title} to={item.route}>
            {item.title}
          </Link>
        ))}
      </NavItems>
    </Navigation>
  );
};

export default Topbar;
