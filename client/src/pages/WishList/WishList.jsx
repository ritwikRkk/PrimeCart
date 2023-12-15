import React from 'react';
import "./WishList.css";
import WishListCard from '../../components/WishListCard/WishListCard';
import { useSelector } from 'react-redux';

const WishList = () => {
    const wishListArr = useSelector(state => state.wishList.wishListArr);

    const showWishList = (item, index) => {
        return (
            <WishListCard key={index} data={item} />
        )
    }

    return (
        <div className="wishlist_container">
            {wishListArr.length>0 &&<div className="wishlist_wrapper">
                {wishListArr.map(showWishList)}
            </div>}
            {wishListArr.length===0 && <div className="empty_wishlist">Your wishlist is empty!</div>}
        </div>
    )
}

export default WishList