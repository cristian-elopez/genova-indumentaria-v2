import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const AllProducts = async (prop) => {
    try {
        const products = await axios.get(`${BASE_URL}/products`);
        const allClothing = await products.data.products.filter(p => p.state === `${prop}`);
        return allClothing;
    } catch (error) {
        console.log(error);
    }
};