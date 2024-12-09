

export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existInProduct = state.cart.find(donation => donation._id === action.payload._id)

            if (existInProduct) {
                return {
                    ...state,
                    cart: state.cart.map(donation =>
                        donation._id === action.payload._id
                            ? { ...donation, quantity: donation.quantity + 1 }
                            : donation)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload)
            }

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }

        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(donation => donation._id === action.payload ? { ...donation, quantity: donation.quantity + 1 } : donation)
            }

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(donation => donation._id === action.payload ? { ...donation, quantity: donation.quantity - 1 } : donation)
            }
    }
}