import React, { useEffect, useRef } from 'react';
import "./SideBarCart.css";
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const SideBarCart = ({ setCartOpen }) => {

    const cartArr = useSelector(state => state.cart.cartArr);
    // console.log(cartArr);

    useEffect(() => {
        // block scrolling when mobile menu is active
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "";
        }
    }, [])

    let cartRef = useRef();
    let closeCart = (event) => {
        if (cartRef.current !== null && !cartRef.current.contains(event.target) && event.target.id !== "nav_cart_btn") {
            setCartOpen(false);
        }

    }
    useEffect(() => {
        document.addEventListener("click", closeCart);
        // eslint-disable-next-line
    }, [])

    const cartList = (item, index) => {
        return (
            <CartItem data={item} key={index} setCartOpen={setCartOpen} />
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

    return (
        <div className={`cart_container`} ref={cartRef}>
            {cartArr.length > 0 && <div className="cart_wrapper">
                <div className="cart_header">Recent 5 items in your Cart</div>
                {cartArr.slice(0, 5).map(cartList)}
                <div className="cart_page_link">
                    <Link to="/cart" className="view_full_cart" onClick={()=> setCartOpen(false)}>View Full Cart <OpenInNewOutlinedIcon /> </Link>
                </div>
            </div>}

            {cartArr.length > 0 && <div className="cart_total">
                <p> <span>Total Items</span> <span>{getTotalItems()}</span> </p>
                <p> <span>SubTotal</span> <span>&#8377; {getTotalPrice()}</span> </p>
                <Link to="/cart" className="checkout" onClick={()=> setCartOpen(false)}> <button>Proceed to CheckOut</button> </Link>
            </div>}
            {cartArr.length === 0 && <div className="empty_cart">Your Cart is Empty!</div>}
        </div>
    )
}

export default SideBarCart