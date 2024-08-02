import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const getOrders = async (token) => {
    try {
        const url = `${BASE_URL}/orders`;
        const headers = {
            "x-token": token
        }
        const response = await axios.get(url, {headers});
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg)
    }
};

export const createOrder = async (body,token) => {
    try {
        const url = `${BASE_URL}/orders/create`;
        const headers = {
            "x-token": token
        }
        const response = await axios.post(url, body, {headers});

        alert("Pedido creado con éxito")
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg)
    }
};