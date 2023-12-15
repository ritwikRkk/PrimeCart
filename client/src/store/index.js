import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ShopSlice from "./slices/ShopSlice";
import WishList from "./slices/WishList";
import UserSlice from "./slices/UserSlice";
import MsgSlice from "./slices/MsgSlice";


const store = configureStore({
    reducer: {
        cart: CartSlice,
        shop: ShopSlice,
        wishList: WishList,
        user: UserSlice,
        msg: MsgSlice
    },
    devTools: false
});

export default store;