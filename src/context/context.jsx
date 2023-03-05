import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {

    const [ items, setItems ] = useState([]);
    const [ total, setTotal ] = useState(0);


    // this function will add an item to the setItems state
    const addToCart = (id, name, price) => {

        setItems((prevItems) => {
            return [...prevItems, { id, name, price, quantity: 1}]
        });
        setTotal((prevTotal) => prevTotal + price);
    }

    // this function will remove an item from the cart
    const removeItemFromCart = (id) => {
        const newState = items.filter((item) => item.id !== id);
        const removedItem = items.find((item) => item.id === id);
        setItems(newState);
        setTotal((prevTotal) => prevTotal - removedItem.price);
    }

    // this function will increment the quantity by 1
    const incrementItemQuantity = (id) => {
        const incrementedQuantityState = items.map((item) => {
            if(item.id === id) {
                return { ...item, quantity: item.quantity + 1}
            }
            return {...item}
        });

        const incrementedItem = items.find((item) => item.id === id);

        setItems(incrementedQuantityState);
        setTotal((prevTotal) => prevTotal + incrementedItem.price);
    };

    // this function will decrement the quantity by 1
    const decrementItemQuantity = (id) => {
        const decrementedQuantityState = items.map((item) => {
            if(item.id === id) {
                if(item.quantity === 0) return { ...item, quantity: 0 };
                return { ...item, quantity: item.quantity - 1}
            }
            return {...item}
        });

        const decrementedItem = items.find((item) => item.id === id);

        setItems(decrementedQuantityState);
        setTotal((prevTotal) => {
            if(prevTotal === 0) {
                return 0;
            } 
            return prevTotal - decrementedItem.price
        });
    };


    return <AppContext.Provider value={{ items, addToCart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity, total }}>{ children }</AppContext.Provider>
};

export  default AppContext;