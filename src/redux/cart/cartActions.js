export const addItemToCart = (cartItems,product) => {
    const productInCart = cartItems.find(item => item._id === product._id);
    if (productInCart) {
        return cartItems.map(item =>
            item._id === productInCart._id
            ? {...item, quantity: item.quantity + 1}
            : item
        );
    }
    return [...cartItems, {...product, quantity: 1}];
};
export const removeitemToCart = (cartItems,_id) => {
    const productToRemove = cartItems.find(item => item._id === _id);
    if (productToRemove.quantity > 1) {
        return cartItems.map(item =>
            item._id === productToRemove._id
            ? {...item, quantity: item.quantity - 1} 
            : item
        );
    }
    return cartItems.filter(item => item._id !== productToRemove._id);
};
export const resetShippingCost = (cartItems,shippingCost) => {
    if (cartItems.length === 1 && cartItems[0].quantity === 1) {
        return 0
    }
    return shippingCost;
};