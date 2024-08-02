import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const GenderClothing = async (genero) => {
    try {
        const products = await axios.get(`${BASE_URL}/products`);
        const maleClothing = await products.data.products.filter(p => p.gender === `${genero}`);
        return maleClothing;
    } catch (error) {
        console.log(error);
    }
};