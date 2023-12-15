// import React, { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import "./CartItem.css";
import { deleteCartItem, updateCartQuantity } from '../../store/slices/CartSlice';
import { Link } from 'react-router-dom';
import cartApi from '../../api/modules/cart.api';
import { deleteMsg, msgDetails } from '../../store/slices/MsgSlice';

const CartItem = ({ data, setCartOpen }) => {

    const dispatch = useDispatch();

    const updateQunatity = async (quantity) => {
        let item = {
            quantity: quantity,
        }

        let cartProduct = await cartApi.updateCart(data.id, item);
        // console.log(cartProduct.data)
        if (cartProduct.data) {
            let data = {
                id: cartProduct.data.id,
                ...cartProduct.data.attributes
            }
            dispatch(updateCartQuantity(data));
        }
    }

    const handleQuantity = async (type) => {
        // console.log(data);

        if (type === "inc" && data.quantity < 5) {
            // dispatch(updateCartQuantity({ id: data.id, quantity: data.quantity + 1 }));
            updateQunatity(data.quantity + 1);
        }
        else if (type === "dec" && data.quantity > 1) {
            updateQunatity(data.quantity - 1);
            // dispatch(updateCartQuantity({ id: data.id, quantity: data.quantity - 1 }));
        }

    }

    const handleDelete = async () => {
        // console.log(data);
        let cartProduct = await cartApi.deleteCart(data.id);
        if (cartProduct.data) {
            dispatch(deleteCartItem({ id: data.id }));
            dispatch(msgDetails({ msgType: "success", msgContent: "Successfully, deleted from Cart" }))
            setTimeout(() => dispatch(deleteMsg()), 3000);
        } else {
            dispatch(msgDetails({ msgType: "failed", msgContent: "Some Error Occured!" }))
            setTimeout(() => dispatch(deleteMsg()), 3000);
        }
    }

    // const imgBaseUrl = "http://localhost:1337";

    return (
        <div className="cart_item">
            <Link to={`/product/${data.productId}`} className="product_link" onClick={() => setCartOpen && setCartOpen(false)}>
                <img className="item_img" src={`${data.img}`} alt="" />
            </Link>
            <div className="item_details">
                <h3 className="item_name">{data.title}</h3>
                {/* <p className="item_rating"> 4.5 stars(40) </p> */}
                <div className="utils_1">
                    <div className="quantity">
                        <span onClick={() => handleQuantity("dec")}>-</span>
                        <span>{data.quantity}</span>
                        <span onClick={() => handleQuantity("inc")}>+</span>
                    </div>
                    <span className="item_price"> <span>{data.quantity} * </span> &#8377; {data.price}</span>
                </div>
                <span className="material-icons delete_btn" onClick={handleDelete}>delete_outline</span>
                <div className="utils_2">
                    <p><span>size:</span> <span> {data.size}</span></p>
                    <p><span>color:</span> <span>{data.color}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CartItem