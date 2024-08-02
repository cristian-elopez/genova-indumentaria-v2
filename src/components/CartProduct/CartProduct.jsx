import { useDispatch } from "react-redux"
import { 
    AiOutlineMinusStyled, 
    AiOutlinePlusStyled, 
    BiSolidTrashAltStyled, 
    ImageContainer, 
    InfoitemContainer, 
    InfoPrenda 
} from "./CartProductsStyles"
import { formatPrice } from '../../utils/formatPrice'
import { addSubtotal, addToCart, removeToCart } from "../../redux/cart/cartSlice"

export const CartProduct = (item) => {
    const dispatch = useDispatch();
    return (
        <InfoPrenda>
            <ImageContainer>
                <img src={item.images[0]} alt={item.tittle}/>
                <p>{item.tittle}</p>
            </ImageContainer>
            <InfoitemContainer>
                <p>{formatPrice(item.price)}</p>
                <div>
                    {
                        item.quantity === 1
                        ? <BiSolidTrashAltStyled onClick={()=> {
                            dispatch(removeToCart(item._id))
                            dispatch(addSubtotal(0))
                        }}/>
                        : <AiOutlineMinusStyled onClick={()=> dispatch(removeToCart(item._id))}/>
                    }
                    <p>{item.quantity}</p>
                    <AiOutlinePlusStyled 
                        onClick={()=> dispatch(addToCart(item))}
                    />
                </div>
                <p>{formatPrice(item.price * item.quantity)}</p>
            </InfoitemContainer>
        </InfoPrenda>
    )
};