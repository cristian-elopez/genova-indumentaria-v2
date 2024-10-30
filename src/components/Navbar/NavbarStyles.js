import { BiShoppingBag, BiUser } from "react-icons/bi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  height: 150px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgcolor }) => (bgcolor ? "transparent" : "#22222")};
  transition: ease-in;
`;
export const LinksContainerStyled = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const LinkContainerStyled = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  &:hover {
    opacity: 0.9;
  }
  span {
    font-size: 0.8rem;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
export const UserContainerStyled = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;

    @media (max-width: 780px) {
      display: none;
    }
  }
`;
export const LogoStyled = styled.img`
  width: 150px;
  padding: 10px 0;
  margin: 0;
  display: flex;
`;
export const IconsContainerStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  right: 5%;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const BiUserStyled = styled(BiUser)`
  font-size: 1.5rem;
  cursor: pointer;
`;
export const BiShoppingBagStyled = styled(BiShoppingBag)`
  font-size: 1.5rem;
  cursor: pointer;
`;
export const CartIconContainer = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: end;
  &:hover {
    opacity: 0.8;
  }
  span {
    font-size: 0.8rem;
  }
`;
export const MenuIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  left: 2rem;
  z-index: 99;

  @media (min-width: 780px) {
    display: none;
  }
`;
export const ThemeIconContainer = styled.div`
  display: flex;
  align-items: end;
  color: ${({ theme }) => theme.text};
  &:hover {
    opacity: 0.8;
  }
  span {
    font-size: 0.8rem;
  }
`;
export const MdOutlineDarkModeStyled = styled(MdOutlineDarkMode)`
  font-size: 1.5rem;
  cursor: pointer;
`;
export const MdDarkModeStyled = styled(MdDarkMode)`
  font-size: 1.5rem;
  cursor: pointer;
`;
