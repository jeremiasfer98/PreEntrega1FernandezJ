// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);

const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
};

return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
    {children}
    </CartContext.Provider>
);
};
