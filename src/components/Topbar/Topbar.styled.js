import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Navigation = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 5%;
`;
export const Logo = styled.div`
  border: 2px solid ${({ theme }) => theme.background.primary};
  color: black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItemsContainer = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 5rem;
  font-weight: 600;
  height: fit-content;
  letter-spacing: 2px;
`;

export const NavItem = styled(Link)`
  margin: 1rem 0.6rem;
  padding: 0.7rem 1rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 0px;
    background-color: red;
    z-index: 2;
  }

  &:hover {
    color: ${({ theme }) => theme.background.primary};
    &:after {
      background-color: ${({ theme }) => theme.background.primary};
      transition: 0.18s ease-in width;
      width: 100%;
    }
  }
`;

export const NavWrap = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.background.light};
  width: 100%;
  height: 80px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
`;
