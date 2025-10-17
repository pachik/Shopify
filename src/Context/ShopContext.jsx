import React, { createContext, useState } from 'react';
import all_product from '../assets/all_product';


const getDefaultcart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}


export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultcart())


    const addToCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
        console.log(cartItems);

    }
    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }))
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if (cartItems[item]>0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }

        }
        return totalAmount
    }
     const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems)
        {
            if (cartItems[item]>0) {
                totalItems += cartItems[item];
                
            }

        }
        return totalItems
    }
    const contextValue = {getTotalCartItems , getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;