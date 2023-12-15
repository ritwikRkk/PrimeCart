import React from 'react';
import "./WishListCard.css";
import { useDispatch } from 'react-redux';
import { deleteWishListItem } from '../../store/slices/WishList';
import { Link } from 'react-router-dom';
import wishlistApi from '../../api/modules/wishlist.api';
import { deleteMsg, msgDetails } from '../../store/slices/MsgSlice';


const WishListCard = ({ data }) => {

    const dispatch = useDispatch();
    const handleDelete = async () => {
        // dispatch(deleteWishListItem({ productId: data.productId }));
        let favProduct = await wishlistApi.deleteWishlist(data.id);
        if (favProduct.data) {
            dispatch(deleteWishListItem({ id: data.id }));
            dispatch(msgDetails({ msgType: "success", msgContent: "Successfully, deleted item from favorites" }))
            setTimeout(() => dispatch(deleteMsg()), 3000);
        }else{
            dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
            setTimeout(() => dispatch(deleteMsg()), 3000);
        }
    }
    // const imgBaseUrl = "http://localhost:1337";

    return (
        <div className="wishlist_item">
            <Link to={`/product/${data.productId}`} className="product_link">
                <img className="item_img" src={`${data.img}`} alt="" />
            </Link>
            <div className="item_info">
                <h3 className="item_title">{data.title}</h3>
                <p className="item_cost">&#8377; {data.price}</p>
                {(data.color !== "null" || data.size !== "null") && <div className="utils_info">
                    {data.color !== "null" && <p> <span>color:</span> <span>{data.color}</span> </p>}
                    {data.size !== "null" && <p> <span>size:</span> <span>{data.size}</span> </p>}
                </div>}
            </div>
            <span className="material-icons delete_btn" onClick={handleDelete}>delete_outline</span>
        </div>
    )
}

export default WishListCard