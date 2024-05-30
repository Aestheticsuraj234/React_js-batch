import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

// Create a context
const GlobalContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        // save data to  local storage
        localStorage.setItem('cart', JSON.stringify([...cart, product]));
        // toast.success('Added to cart');

    };


    return (
        <GlobalContext.Provider value={{
            cart,
            addToCart
         }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, ContextProvider};

