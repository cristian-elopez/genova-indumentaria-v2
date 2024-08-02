import { useNavigate } from "react-router-dom";
import { MenuContainer } from "./HamburgerMenuStyles"
import { useDispatch } from "react-redux";
import { setToggleMenu } from "../../redux/menu/menuSlice";

export const HamburgerMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <MenuContainer>
            <ul>
                <li 
                    onClick={()=> {
                        navigate("/");
                        dispatch(setToggleMenu())}}> 
                    Inicio 
                </li>
                <li 
                    onClick={()=> {
                        navigate("/help");
                        dispatch(setToggleMenu())}}> 
                    Ayuda 
                </li>
                <li 
                    onClick={()=> {
                        navigate("/gender/women");
                        dispatch(setToggleMenu())}}> 
                    Mujer 
                </li>
                <li 
                    onClick={()=> {
                        navigate("/gender/men");
                        dispatch(setToggleMenu())}}> 
                    Hombre 
                </li>
            </ul>
        </MenuContainer>
    )
}
