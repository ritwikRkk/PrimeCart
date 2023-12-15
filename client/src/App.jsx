import './App.css';
import routes from './routes/routes';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchShopContent } from './store/slices/ShopSlice';
import { addUser } from './store/slices/UserSlice';
import userApi from './api/modules/user.api';
import wishlistApi from './api/modules/wishlist.api';
import { getWishListItems } from './store/slices/WishList';
import cartApi from './api/modules/cart.api';
import { getCartItem } from './store/slices/CartSlice';

const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const FetchUser = async () => {
    let user_Token = localStorage.getItem("user_token");
    if (user_Token) {
      let user = await userApi.getUser(user_Token);
      if (user) {
        // console.log(user);
        dispatch(addUser(user));
        return;
      }
    } else {
      return false;
    }
  }
  useEffect(() => {
    dispatch(fetchShopContent({ qs: { "sort[0]": "updatedAt:desc", "populate": "*" } }));
    // dispatch(fetchShopContent({ qs: {"filters[type]": "featured", "sort[0]": "updatedAt:desc", "populate": "*"} } ));

    // Fetch User Details
    FetchUser();
    // End Fetch User Details
    // eslint-disable-next-line
  }, [])


  const fetchWishlist = async () => {
    let wishlist = await wishlistApi.getWishlist({ "filters[user]": user.userInfo.id, "populate": "*", "sort[0]": "updatedAt:desc", });
    let wishlistArr = [];
    wishlist.data.forEach((elem) => {
      let data = {
        id: elem.id,
        ...elem.attributes
      }
      wishlistArr.push(data);
      // console.log(data);
    })
    dispatch(getWishListItems(wishlistArr));
  }

  const fetchCart = async () => {
    let cart = await cartApi.getCart({ "filters[user]": user.userInfo.id, "populate": "*", "sort[0]": "updatedAt:desc", });
    let cartArr = [];
    cart.data.forEach((elem) => {
      let data = {
        id: elem.id,
        ...elem.attributes
      }
      cartArr.push(data);
      // console.log(data);
    })
    dispatch(getCartItem(cartArr));
  }

  useEffect(() => {
    if (!user.isLoading) {
      // console.log(user);
      fetchWishlist();
      fetchCart();

    }
    // eslint-disable-next-line
  }, [user])


  return (

    <RouterProvider router={router} />

  );
}

export default App;
