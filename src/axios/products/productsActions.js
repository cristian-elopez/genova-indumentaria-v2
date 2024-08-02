import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const createItem = async (item,token) => {
    try {
        const url = `${BASE_URL}/products/create`;
        const body = {
            tittle: item.tittle,
            category: item.category,
            gender: item.gender,
            desc: item.desc,
            price: item.price,
            quantity: item.quantity,
            color: item.color,
            size: item.size,
            images: [item.image],
        };
        const headers = {
            "x-token": token
        };
        const response = await axios.post(url, body, {headers});

        alert("Item creado con éxito")
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg)
    }
};

export const updateItem = async (item,token) => {
    try {
        const url = `${BASE_URL}/products/update`;
        const body = {
            tittle: item.tittle,
            newTittle: item.newTittle,
            category: item.category,
            gender: item.gender,
            desc: item.desc,
            price: item.price,
            quantity: item.quantity,
            color: item.color,
            size: item.size,
            images: [item.image],
        };
        const headers = {
            "x-token": token
        };
        const response = await axios.patch(url, body, {headers});

        alert("Item actualizado con éxito")
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg)
    }
};

export const deleteItem = async (item,token) => {
    try {
        const url = `${BASE_URL}/products/delete`;
        const body = {
            tittle: item.tittle
        };
        const headers = {
            "x-token": token
        };
        const response = await axios.delete(url, body, {headers});

        alert("Item eliminado con éxito")
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg)
    }
};