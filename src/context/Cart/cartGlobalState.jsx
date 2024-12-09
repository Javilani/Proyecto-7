import { useReducer } from "react";
import { CartContext } from "./cartContext";
import { CartReducer } from "./cartReducer";

const initialState = {
    cart: []
};

export const CartProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(CartReducer, initialState)

    const addToCart = (donation) => {
        console.log(state);
        dispatch({ type: 'ADD_TO_CART', payload: donation })
    }

    const removeFromCart = (donationID) => {
        console.log('Removing donation with ID:', donationID);
        dispatch({ type: 'REMOVE_FROM_CART', payload: donationID });
        console.log(state)
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    const increaseQuantity = (donationID) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: donationID})
    }

    const decreaseQuantity = (donationID) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: donationID})
    }

    return (
        <CartContext.Provider 
        value={{
            cart: state.cart,
            addToCart,
            removeFromCart,
            clearCart,
            increaseQuantity,
            decreaseQuantity
        }}
        >
            { children }
        </CartContext.Provider>
    )
}