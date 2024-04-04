import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState({
        cart: []
    });


    return (
        <CartContext.Provider
        value={{ cartState, setCartState }}
        >
        {children}
        </CartContext.Provider>
    );
};
