import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { 
    BiShoppingBagStyled,
    BiUserStyled,
    CartIconContainer,
    IconsContainerStyled, 
    LinkContainerStyled, 
    LinksContainerStyled, 
    LogoStyled, 
    MenuIconContainer, 
    NavbarContainerStyled, 
    UserContainerStyled
} from "./NavbarStyles"
import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { setToggleMenu } from "../../redux/menu/menuSlice";

export const Navbar = () => {

    const totalCartProducts = useSelector(state => state.cart.cartItems)
        .reduce((acc, item) => (acc += item.quantity), 0)

    const {currentUser} = useSelector(state => state.user);
    const {toggleMenu} = useSelector(state => state.menu);
    const dispatch = useDispatch();

    return (
        <NavbarContainerStyled bgcolor={toggleMenu}>
            {
                !toggleMenu && <HamburgerMenu/>
            }
            <MenuIconContainer onClick={()=> dispatch(setToggleMenu())}>
                <GiHamburgerMenu/>
            </MenuIconContainer> 
            <LinksContainerStyled> 
                <Link to="/">
                    <LinkContainerStyled>Inicio</LinkContainerStyled>
                </Link>
                <Link to='/help'>
                    <LinkContainerStyled>Ayuda</LinkContainerStyled>
                </Link>
                <Link to="/">
                    <LogoStyled 
                        src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682357016/PROYECTOS/GENOVA/IMAGES/genova-icon-white_brnuuq.png"
                        alt="Genova logo"
                    />
                </Link>
                <Link to='/gender/women'>
                    <LinkContainerStyled>Mujer</LinkContainerStyled>
                </Link>
                <Link to='/gender/men'>
                    <LinkContainerStyled>Hombre</LinkContainerStyled>
                </Link>
            </LinksContainerStyled>
            <IconsContainerStyled>
                <Link to="/login">
                    <UserContainerStyled>
                        <p>{
                            currentUser
                            ? currentUser.name
                            : "Ingresar"
                        }</p>
                        <BiUserStyled/>
                    </UserContainerStyled>
                </Link>
                <Link to="/cart">
                    <CartIconContainer> 
                        <BiShoppingBagStyled/>
                        <span>{totalCartProducts}</span>
                    </CartIconContainer>
                </Link>
            </IconsContainerStyled>
        </NavbarContainerStyled>
    )
};