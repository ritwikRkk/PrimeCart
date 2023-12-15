import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishListArr: [],
    // isLoading: true,
    // error: null,
}

const WishList = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        getWishListItems(state, action) {
            // console.log(action.payload);
            return {
                wishListArr: action.payload
            }
        },
        addWishListItem(state, action) {
            return {
                wishListArr: [
                    action.payload,
                    ...state.wishListArr.filter(obj => obj.productId !== action.payload.productId),
                ]
            }
        },
        deleteWishListItem(state, action) {
            // console.log(action.payload)
            return {
                wishListArr: [
                    ...state.wishListArr.filter(obj => obj.id !== action.payload.id),
                ]
            }
        },
        clearWishList() {
            // console.log(action.payload)
            return initialState;
        },
    }
})

export default WishList.reducer;
export const { addWishListItem, deleteWishListItem, getWishListItems, clearWishList } = WishList.actions;

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