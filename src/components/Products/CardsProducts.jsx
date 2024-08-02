import { useEffect, useState } from "react"
import { CardProduct } from "./CardProduct"
import { ProductosContainer } from "./CardsProductsStyles"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { addMensProducts } from "../../redux/products/menProductsSlice"
import { addWomensProducts } from "../../redux/products/womenProductsSlice"
import { GenderClothing } from "../../axios/products/genderClothing"

export const CardsProducts = (genero) => {
    const { pathname } = useLocation();
    let [products, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { selectedCategory } = useSelector(state => state.categories);
    const dispatch = useDispatch();

    let chosen = [];
    let gender = genero.gender;
    const genderChoice = async () => {
        setProduct(null);
        setLoading(true);
        if (gender == '/gender/men') {
            chosen = await GenderClothing("masculino");
            dispatch(addMensProducts());
        } else if (gender == '/gender/women') {
            chosen = await GenderClothing("femenino");
            dispatch(addWomensProducts());
        };

        if (selectedCategory) {
            chosen = chosen.filter(c => c.category === selectedCategory)
        }
        setProduct(chosen);
        setLoading(false);
    };
    useEffect(() => {
        genderChoice();
    }, [pathname, selectedCategory])

    return (
        <ProductosContainer>
            {
                loading 
                ? <p>Cargando...</p> 
                : products.map(wear => <CardProduct key={wear._id} {...wear}/>) 
            }
        </ProductosContainer>
    )
};