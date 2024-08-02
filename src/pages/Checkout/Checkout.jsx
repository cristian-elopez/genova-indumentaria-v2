import { useSelector } from "react-redux";
import { CheckoutForm } from "../../components/Checkout/Form/CheckoutForm"
import { CheckoutProducts } from "../../components/Checkout/Products/CheckoutContainer"
import { ContainerCheckout } from "./CheckoutStyles"

function Checkout () {
    const {cartItems,shippingCost,cartSubtotal} = useSelector(state => state.cart);
    return (
        <ContainerCheckout>
            <CheckoutForm
                cartItems={cartItems}
                shippingCost={shippingCost}
                cartSubtotal={cartSubtotal}
            />
            <CheckoutProducts 
                cartItems={cartItems}
                shippingCost={shippingCost}
                cartSubtotal={cartSubtotal}
            />
        </ContainerCheckout>
    )
};

export default Checkout;