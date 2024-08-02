import {
    CheckoutFormStyled,
    Form,
    Formik
} from "./CheckoutFormStyles"
import Input from "../../UI/Input/Input"
import Submit from "../../UI/Submit/Submit"
import { checkoutInitialValues } from "../../../formik/initialValues"
import { checkoutValidationSchema } from "../../../formik/validationSchema"
import { createOrder, getOrders } from "../../../axios/orders/ordersActions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../../../redux/cart/cartSlice"


export const CheckoutForm = ({ cartItems, shippingCost, cartSubtotal }) => {
    const { currentUser } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <CheckoutFormStyled>
            <h2>Ingresá tus datos</h2>
            <Formik
                initialValues={checkoutInitialValues}
                validationSchema={checkoutValidationSchema}
                onSubmit={async (values) => {
                    const orderData = {
                        price: cartSubtotal,
                        shippingCost,
                        total: cartSubtotal + shippingCost,
                        products: (await cartItems.map(item => item.tittle)),
                        shippingDetails: { ...values }
                    }
                    try {
                        await createOrder(orderData, currentUser?.token);
                        dispatch(clearCart());
                        navigate("/orders")
                    } catch (error) {
                        console.error(error);
                        alert('Hubo un error al procesar tu pedido');
                    }
                }}
            >
                <Form>
                    <Input
                        htmlFor='celular'
                        type='number'
                        id='celular'
                        placeholder='Tu celular'
                        name='cellphone'
                    >
                        Celular
                    </Input>
                    <Input
                        htmlFor='localidad'
                        type='text'
                        id='localidad'
                        placeholder='Tu localidad'
                        name='location'
                    >
                        Localidad
                    </Input>
                    <Input
                        htmlFor='direccion'
                        type='text'
                        id='dirección'
                        placeholder='Tu dirección'
                        name='adress'
                    >
                        Dirección
                    </Input>
                    <Input
                        htmlFor='zipcode'
                        type='number'
                        id='zipcode'
                        placeholder='Tu código postal'
                        name='zipCode'
                    >
                        Código Postal
                    </Input>
                    <div>
                        <Submit disabled={!cartItems.length}>CONFIRMAR PEDIDO</Submit>
                    </div>
                </Form>
            </Formik>
        </CheckoutFormStyled>
    )
}
