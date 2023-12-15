import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import shopApi from "../../api/modules/shop.api";

const initialState = {
    shopArr1: [
        {
            id: 1,
            img: [
                "../images/1_d.png",
                "http://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/9741917/pexels-photo-9741917.jpeg?auto=compress&cs=tinysrgb&w=1600",
            ],
            title: "Long sleeve Graphics T-shirt",
            // title: "T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 122,
            rating: 3
        },
        {
            id: 2,
            img: [
                "http://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/16168937/pexels-photo-16168937.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/5812168/pexels-photo-5812168.jpeg?auto=compress&cs=tinysrgb&w=1600"
            ],
            title: "Coat",
            isNew: false,
            oldPrice: 19,
            price: 212,
            rating: 4.5
        },
        {
            id: 3,
            img: [
                "http://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/18127739/pexels-photo-18127739.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/16934257/pexels-photo-16934257.jpeg?auto=compress&cs=tinysrgb&w=1600"
            ],
            title: "Skirt",
            isNew: true,
            oldPrice: 19,
            price: 132,
            rating: 4.9
        },
        {
            id: 4,
            img: [
                "http://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/18165296/pexels-photo-18165296.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "http://images.pexels.com/photos/18120578/pexels-photo-18120578.jpeg?auto=compress&cs=tinysrgb&w=1600"
            ],
            title: "Hat",
            isNew: false,
            oldPrice: 19,
            price: 192,
            rating: 5
        },
    ],
    shopArr: [],
    isLoading: true,
    error: null,
}

export const fetchShopContent = createAsyncThunk(
    'fetchShopContent',
    async (req) => {
        const products = await shopApi.getList({ qs: req.qs });
        return { products };
    }
)

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        // addItem(state, action) {
        //     return state.cartArr.unshift(action.payload);
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShopContent.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchShopContent.fulfilled, (state, action) => {
            state.isLoading = false;
            // console.log(action.payload.products.data);
            // console.log(action.payload.genre.data.genres)
            state.shopArr = action.payload.products.data;
            // state.movieGenre = action.payload.genre.data.genres;
        })
        builder.addCase(fetchShopContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default shopSlice.reducer;
// export const { addItem } = shopSlice.actions;