import { 
    BiTrashStyled,
    ContainerAllProducts,
    ContainerInfoPrenda, 
    ContainerTitulosInfo, 
    ContainerTotalCarrito, 
    InfoTotalCart, 
    MensajeVacio,
    PrecioTotal
} from "./CartStyles"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/UI/Button/Button"
import { CartProduct } from "../../components/CartProduct/CartProduct"
import { formatPrice } from "../../utils/formatPrice"
import { addSubtotal, clearCart } from "../../redux/cart/cartSlice"
import Increase from "../../components/UI/Increase/Increase"
import { useNavigate } from "react-router-dom"

function Cart () {
    const {cartItems,shippingCost} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const subtotalCart = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity);
    }, 0);

    return (
        <InfoTotalCart> 
            <ContainerInfoPrenda>
                <ContainerTitulosInfo>
                    <p>PRODUCTO SELECCIONADO</p>
                    <p>PRECIO</p>
                    <p>CANTIDAD</p>
                    <p>SUBTOTAL</p>
                </ContainerTitulosInfo>
                <ContainerAllProducts>
                    {
                        cartItems.length 
                        ? (cartItems.map(item => (<CartProduct key={item._id} {...item} />))) 
                        : (<MensajeVacio>No hay productos en el carrito</MensajeVacio>)
                    } 
                    {<Increase 
                        onClick={()=> {
                            dispatch(clearCart())
                            dispatch(addSubtotal(0))
                        }}
                        disabled={!cartItems.length}>
                        <BiTrashStyled />
                    </Increase>}
                </ContainerAllProducts>
            </ContainerInfoPrenda>
            <ContainerTotalCarrito>
                <h3>Total del carrito</h3>
                <div>
                <p>Subtotal</p>
                <p>{formatPrice(subtotalCart)}</p>
                </div>
                <div>
                <p>Envio</p>
                <p>{formatPrice(shippingCost)}</p>
                </div>
                <div>
                <p>TOTAL</p>
                <PrecioTotal>{formatPrice(subtotalCart + shippingCost)}</PrecioTotal>
                </div>
                <Button 
                    disabled={!cartItems.length}
                    onClick={() => {
                        navigate("/checkout")
                        dispatch(addSubtotal(subtotalCart))
                    }}
                >
                    INICIAR PEDIDO
                </Button>
            </ContainerTotalCarrito>
        </InfoTotalCart>
    )
};

export default Cart;