import { styled } from "styled-components";

export const SidebarCard = styled.div`
  background-color: ${({ theme }) => theme.background.light};
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.3);
  border-radius: 0 3px 3px 0;
  height: 240px;
  width: 60px;
  position: fixed;
  top: calc(50% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;

  svg {
    padding: 0.5rem;
  }

  svg:hover {
    color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
  }
`;
