import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../../redux/user/userSlice"
import Submit from "../UI/Submit/Submit"
import { Link } from "react-router-dom"
import { 
    ActionsContainer,
    ActionsUserStyled,
    UserActionsContainer
} from "./UserActionsStyles"
import { clearOrders } from "../../redux/orders/ordersSlice"

export const UserActions = () => {
    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch();

    setTimeout(() => dispatch(setCurrentUser(null)), 1 * 3600000)
    return (
        <UserActionsContainer>
            <h1>Bienvenido {currentUser.name}</h1>
            <ActionsContainer>
                {
                    currentUser.rol === "50yun4dm1n"
                    ?
                        <>
                            <Link to="/item/create">
                                <ActionsUserStyled>Crear producto</ActionsUserStyled>
                            </Link>
                            <Link to="/item/update">
                                <ActionsUserStyled>Modificar producto</ActionsUserStyled>
                            </Link>
                            <Link to="/item/delete">
                                <ActionsUserStyled>Eliminar producto</ActionsUserStyled>
                            </Link>
                        </>
                    :   <></>
                }
                <Link to="/orders">
                    <ActionsUserStyled>Mis pedidos</ActionsUserStyled>
                </Link>
            </ActionsContainer>
            <Submit 
                onClick={()=> {
                    dispatch(setCurrentUser(null));
                    dispatch(clearOrders())
                }}
            >
                    Cerrar sesion
            </Submit>
        </UserActionsContainer>
    )
};
