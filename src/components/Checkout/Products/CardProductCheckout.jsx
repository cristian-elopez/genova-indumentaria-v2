import { formatPrice } from "../../../utils/formatPrice"
import { 
    CardProductContainer, 
    ImageContainer
} from "./CheckoutProductsStyles"

export const CardProductCheckout = (item) => {
  return (
    <CardProductContainer>
        <ImageContainer>
                <img src={item.images[0]} alt={item.tittle}/>
                <p>{item.tittle}</p>
        </ImageContainer>
        <div>
            <p>x({item.quantity})</p>
        </div>
        <p>{formatPrice(item.price * item.quantity)}</p>
    </CardProductContainer>
  )
}
