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

    return (
        <CartContext.Provider 
        value={{
            cart: state.cart,
            addToCart
        }}
        >
            { children }
        </CartContext.Provider>
    )
}