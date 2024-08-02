import { 
    ClothingContainer, 
    ImageContainer, 
    InfoContainer, 
    PriceContainer
} from "./ClothingStyles"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/UI/Button/Button"
import { addToCart } from "../../redux/cart/cartSlice"
import { formatPrice } from "../../utils/formatPrice"

function Clothing () {
    const {item} = useSelector(state => state.item);
    const dispatch = useDispatch();

    return (
        <ClothingContainer>
            <ImageContainer>
                <img src={item.images[0]} alt={item.tittle}/>
            </ImageContainer>
            <InfoContainer>
                <h3>{item.tittle}</h3>
                <p>Color: {item.color}</p>
                <p>Talle: {item.size}</p>
                <p>Descripción: {item.desc}</p>
                <PriceContainer>{formatPrice(item.price)}</PriceContainer>
                <p>Categoria: {item.category}</p>
                <Button onClick={()=>{
                    dispatch(addToCart(item))
                    alert(`Producto "${item.tittle}" agregado al carrito!`)                    
                }}>
                    Agregar al Carrito
                </Button>
            </InfoContainer>
        </ClothingContainer>
    )
};

export default Clothing;