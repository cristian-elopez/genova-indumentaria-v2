import { formatPrice } from "../../utils/formatPrice"
import { formatDate } from "../../utils/formatDate"
import { OrdersCardsContainer } from "./CardsOrdersStyles"

export const CardOrder = (order) => {
    return (
        <OrdersCardsContainer>
            <h3>Pedido #{order._id.slice(0,6)}</h3>
            <p>Fecha: {formatDate(order.createdAt)}</p>
            <p>Total: {formatPrice(order.total)}</p>
            <p>Estado: {order.state}</p>
            <p>Cantidad de productos: {order.products.length}</p>   
            <p>Detalles del envio:</p>
            <div>
                <p>Telefono: {order.shippingDetails.cellphone}</p>
                <p>Localidad: {order.shippingDetails.location}</p>
                <p>Dirección: {order.shippingDetails.adress}</p>
                <p>C. Postal: {order.shippingDetails.zipCode}</p>
            </div>
        </OrdersCardsContainer>
    )
};