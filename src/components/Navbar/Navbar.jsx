import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BiShoppingBagStyled,
  BiUserStyled,
  CartIconContainer,
  IconsContainerStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  LogoStyled,
  MdDarkModeStyled,
  MdOutlineDarkModeStyled,
  MenuIconContainer,
  NavbarContainerStyled,
  ThemeIconContainer,
  UserContainerStyled,
} from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { setToggleMenu } from "../../redux/menu/menuSlice";
import { toggleTheme } from "../../redux/theme/themeSlice";

export const Navbar = () => {
  const totalCartProducts = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const { currentUser } = useSelector((state) => state.user);
  const { toggleMenu } = useSelector((state) => state.menu);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <NavbarContainerStyled bgcolor={toggleMenu}>
      {!toggleMenu && <HamburgerMenu />}
      <MenuIconContainer onClick={() => dispatch(setToggleMenu())}>
        <GiHamburgerMenu />
      </MenuIconContainer>
      <LinksContainerStyled>
        <Link to="/">
          <LinkContainerStyled>Inicio</LinkContainerStyled>
        </Link>
        <Link to="/help">
          <LinkContainerStyled>Ayuda</LinkContainerStyled>
        </Link>
        <Link to="/">
          <LogoStyled
            src={
              theme === "light"
                ? "https://res.cloudinary.com/dja0b7qbo/image/upload/f_auto,q_auto/v1/PROYECTOS/GENOVA/IMAGES/genova-icon-black"
                : "https://res.cloudinary.com/dja0b7qbo/image/upload/v1682357016/PROYECTOS/GENOVA/IMAGES/genova-icon-white"
            }
            alt="Genova logo"
          />
        </Link>
        <Link to="/gender/women">
          <LinkContainerStyled>Mujer</LinkContainerStyled>
        </Link>
        <Link to="/gender/men">
          <LinkContainerStyled>Hombre</LinkContainerStyled>
        </Link>
      </LinksContainerStyled>
      <IconsContainerStyled>
        <ThemeIconContainer onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? (
            <MdOutlineDarkModeStyled />
          ) : (
            <MdDarkModeStyled />
          )}
        </ThemeIconContainer>
        <Link to="/login">
          <UserContainerStyled>
            <p>{currentUser ? currentUser.name : "Ingresar"}</p>
            <BiUserStyled />
          </UserContainerStyled>
        </Link>
        <Link to="/cart">
          <CartIconContainer>
            <BiShoppingBagStyled />
            <span>{totalCartProducts}</span>
          </CartIconContainer>
        </Link>
      </IconsContainerStyled>
    </NavbarContainerStyled>
  );
};
