import React, { createContext, useContext, useState } from 'react';

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({ children }) => {
    const [detailedOrders, setDetailedOrders] = useState([]);

    return (
        <OrdersContext.Provider value={{ detailedOrders, setDetailedOrders }}>
            {children}
        </OrdersContext.Provider>
    );
};
