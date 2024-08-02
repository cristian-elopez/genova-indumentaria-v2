import { 
    CardsWrapperStyled, 
    CheckoutProductsContainer, 
    ContainerTotalCheckout, 
    PrecioTotal 
} from "./CheckoutProductsStyles"
import { formatPrice } from "../../../utils/formatPrice"
import { CardProductCheckout } from "./CardProductCheckout"

export const CheckoutProducts = ({cartItems,shippingCost,cartSubtotal}) => {
    return (
        <CheckoutProductsContainer>
            <h2>Tu Pedido</h2>
            <CardsWrapperStyled>
                {
                    (cartItems.map(item => (<CardProductCheckout key={item._id} {...item} />))) 
                }
            </CardsWrapperStyled>
            <ContainerTotalCheckout>
                <div>
                    <p>Subtotal</p>
                    <p>{formatPrice(cartSubtotal)}</p>
                </div>
                <div>
                    <p>Envio</p>
                    <p>{formatPrice(shippingCost)}</p>
                </div>
                <div>
                    <p>TOTAL</p>
                    <PrecioTotal>{formatPrice(cartSubtotal + shippingCost)}</PrecioTotal>
                </div>
            </ContainerTotalCheckout>
        </CheckoutProductsContainer>
    )
}
