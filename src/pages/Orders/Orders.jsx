import { OrdersContainer } from "./OrdersStyles"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getOrders } from "../../axios/orders/ordersActions"
import { addOrders } from "../../redux/orders/ordersSlice"
import { CardOrder } from "../../components/Orders/CardsOrders"

function Orders () {
    const { orders } = useSelector(state => state.orders);
    const { currentUser } = useSelector(state => state.user);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const OrdersCurrentUser = async () => {
        setLoading(true);
        if (!orders) {
            const data = await getOrders(currentUser?.token)
            dispatch(addOrders(data.orders))
        } 
        setLoading(false);
    };

    useEffect(()=> {
        OrdersCurrentUser();
    },[orders, currentUser?.token])

    return (
        <OrdersContainer>
            {
                loading
                ?
                    <p>Cargando...</p>
                :
                    orders.length > 0
                    ? 
                        orders.map(order => <CardOrder key={order._id} {...order}/>)
                    :
                        <p>¿Que esperas para hacer tu primera compra?</p> 
            }
        </OrdersContainer>
    )
};

export default Orders;