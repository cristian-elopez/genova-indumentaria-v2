import { useEffect, useState } from "react"
import { CardProduct } from "./CardProduct"
import { ProductosContainer } from "./CardsProductsStyles"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

export const CardsProducts = (genero) => {
    const { pathname } = useLocation();
    let [products, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { maleproducts } = useSelector(state => state.menswear);
    const { womenproducts } = useSelector(state => state.womenswear);
    const { selectedCategory } = useSelector(state => state.categories);

    let chosen = [];
    let gender = genero.gender;
    const genderChoice = async () => {
        setProduct(null);
        setLoading(true);
        if (gender == '/gender/men') {
            chosen = await maleproducts;
        } else if (gender == '/gender/women') {
            chosen = await womenproducts;
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