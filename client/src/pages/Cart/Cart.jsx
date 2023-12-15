import React from 'react';
import "./Cart.css";
import CartItem from '../../components/CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import OrderApi from '../../api/modules/order.api';



const Cart = () => {
    const cartArr = useSelector(state => state.cart.cartArr);

    const cartList = (item, index) => {
        return (
            <CartItem data={item} key={index} />
        )
    }

    const getTotalItems = () => {
        let totalItem = 0;
        cartArr.forEach(element => {
            totalItem += element.quantity;
        });
        return totalItem;
    }
    const getTotalPrice = () => {
        let totalPrice = 0;
        cartArr.forEach(element => {
            totalPrice += element.quantity * element.price;
        });
        return totalPrice;
    }

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await OrderApi.createOrder({ products: cartArr, });
            // console.log(res);
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="cart_page_container">
            {cartArr.length > 0 && <div className="cart_page_wrapper">
                {/* Cart Page */}
                {cartArr.map(cartList)}
            </div>}
            {cartArr.length > 0 && <div className="cart_subtotal">
                <p> <span>Total Items</span> <span>{getTotalItems()}</span> </p>
                <p> <span>SubTotal</span> <span>&#8377; {getTotalPrice()}</span> </p>
                <Link to="" className="checkout"> <button onClick={handlePayment}>Proceed to CheckOut</button> </Link>
            </div>}
            {cartArr.length === 0 && <div className="empty_cart">Your Cart is Empty!</div>}

        </div>


    )
}

export default Cart