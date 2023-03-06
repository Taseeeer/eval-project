import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {

    const [ items, setItems ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ totalCartItems, setTotalCartItems ] = useState(0);
    const [ searchFilter, setSearchFilter ] = useState('');

    // this function will add an item to the setItems state
    const addToCart = (id, name, price) => {

        const checkIndex = items.findIndex((item) => item.id === id);
        if(checkIndex !== -1) {
            items[checkIndex].quantity+1;
            incrementItemQuantity(id);
        } else {
            setItems((prevItems) => {
                return [...prevItems, { id, name, price, quantity: 1}]
            });

            setTotal((prevTotal) => prevTotal + price);
        }

        const cartItemsReducer = items.reduce((acc, curr) => {
            acc += curr.quantity;
            return acc;
        }, 1);

        setTotalCartItems(cartItemsReducer);

    }

    // this function will remove an item from the cart
    const removeItemFromCart = (id) => {
        const newState = items.filter((item) => item.id !== id);
        setItems(newState);

        const removedItem = items.find((item) => item.id === id);
        setTotal((prevTotal) => prevTotal - (removedItem.quantity * removedItem.price));

        setTotalCartItems((prevState) => prevState - removedItem.quantity);
    }

    // this function will increment the quantity by 1 and add its price to the total price
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
        setTotalCartItems((prevState) => prevState + 1);
    };

    // this function will decrement the quantity by 1 and deduct its price from the total price
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

        if(decrementedItem.quantity > 0) {
            setTotal((prevTotal) => {
                if(prevTotal === 0) {
                    return 0;
                } 
                return prevTotal - decrementedItem.price
            });
        }
        setTotalCartItems((prevState) => prevState - 1);
    };



    return <AppContext.Provider value={{ items, searchFilter, setSearchFilter, totalCartItems, addToCart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity, total }}>{ children }</AppContext.Provider>
};

export  default AppContext;