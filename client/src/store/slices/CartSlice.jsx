import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArr: [],
    // isLoading: true,
    // error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCartItem(state, action) {
            return {
                cartArr: action.payload
            }
        },
        addCartItem(state, action) {
            return {
                cartArr: [
                    action.payload,
                    ...state.cartArr.filter(obj => obj.id !== action.payload.id),
                ]
            }
        },
        updateCartQuantity(state, action) {
            // console.log(action.payload)
            return {
                cartArr: [
                    ...state.cartArr.map(obj => {
                        if (obj.id === action.payload.id) {
                            return { ...obj, quantity: action.payload.quantity };
                        }
                        return obj;
                    })
                ]
            }
        },
        deleteCartItem(state, action) {
            // console.log(action.payload)
            return {
                cartArr: [
                    ...state.cartArr.filter(obj => obj.id !== action.payload.id),
                ]
            }
        },
        clearCart() {
            // console.log(action.payload)
            return initialState
        },
    }
})

export default cartSlice.reducer;
export const { getCartItem, addCartItem, updateCartQuantity, deleteCartItem, clearCart } = cartSlice.actions;

// return {
//     ...state,
//     mdReviews: [
//         ...state.mdReviews.map(obj => {
//             if (obj._id === action.payload.id) {
//                 return { ...obj, reviewContent: action.payload.data };
//             }
//             return obj;
//         })
//     ]
// }