import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { itemSelected } from "../../redux/item/itemSlice"
import { 
    CardImg, 
    CardText, 
    PriceContainer, 
    ProductosCard 
} from "./CardsProductsStyles"
import { formatPrice } from "../../utils/formatPrice";

export const CardProduct = (item) => {
    const dispatch = useDispatch();
    return (
        <ProductosCard
            onClick={()=> dispatch(itemSelected(item))}>
            <Link to={`/clothing/:${item._id}`}>
                <CardImg src={item.images[0]} alt={item.tittle}/>
                <CardText>
                    <h3>{item.tittle}</h3>
                    <p>{item.desc}</p>
                    <PriceContainer>{formatPrice(item.price)}</PriceContainer>
                </CardText>
            </Link>
        </ProductosCard>
    )
};

