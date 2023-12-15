import React, { useState, useEffect, useRef } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideBarCart from '../SideBarCart/SideBarCart';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const cartArr = useSelector(state => state.cart.cartArr);
    const wishListArr = useSelector(state => state.wishList.wishListArr)
    const location = useLocation();

    const [mobileMenu, setMobileMenu] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    let menuRef = useRef();
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    useEffect(() => {
        // block scrolling when mobile menu is active
        if (mobileMenu) {
            document.body.style.overflowY = "hidden";
        }
        return () => {
            document.body.style.overflowY = "";
        }
    }, [mobileMenu])

    const hideMobileMenu = () => {
        setMobileMenu(false);
    }

    const handleCart = () => {
        // debugger
        setCartOpen(!cartOpen);
        hideMobileMenu();
    }

    useEffect(() => {
        // close mobile menu when clicked outside of it
        let closeMobileMenu = (event) => {
            if (!menuRef.current.contains(event.target) && event.target.id !== "bar") {
                hideMobileMenu();
            }
        }
        document.addEventListener("click", closeMobileMenu);
    }, [])

    useEffect(() => {
    //   console.log(location.pathname);
      window.scrollTo(0, 0);
    }, [location])
    

    return (
        <>
            <div className="navbar_container">
                <div className="navbar">
                    <div className="nav_logo">
                        <Link className="site_logo" to="/">PrimeCart</Link>
                    </div>
                    <div className={`nav_wrapper ${mobileMenu ? "active" : ""}`} ref={menuRef}>
                        <div className="nav_left">
                            <div className="nav_items">
                                <Link className="nav_links links" to="/store" onClick={() => hideMobileMenu()}>Store</Link>
                            </div>
                            <div className="nav_items">
                                <div className="dropdown_menu">
                                    <div className="dropdown_name">Categories</div>
                                    <div className="dropdown_list">
                                        <Link className="dropdown_links links" to="/men" onClick={() => hideMobileMenu()}>Men</Link>
                                        <Link className="dropdown_links links" to="/women" onClick={() => hideMobileMenu()}>Women</Link>
                                        <Link className="dropdown_links links" to="/children" onClick={() => hideMobileMenu()}>Children</Link>
                                        <Link className="dropdown_links links" to="/accessories" onClick={() => hideMobileMenu()}>Accessories</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav_right">
                            <div className="nav_items">
                                <Link className="nav_links links" to="/h" onClick={() => hideMobileMenu()}> <SearchIcon /> </Link>
                            </div>
                            <div className="nav_items">
                                <Link className="nav_links links" to="/wishlist" onClick={() => hideMobileMenu()}> <FavoriteIcon /> </Link>
                                <sup className="wishlist_num">{wishListArr.length}</sup>
                            </div>
                            <div className="nav_items">
                                <span className="nav_links cart links" to="/" > <span className="material-icons" id="nav_cart_btn" onClick={() => handleCart()}>shopping_cart</span> </span>
                                <sup className="cart_num">{cartArr.length}</sup>
                            </div>
                            <div className="nav_items">
                                <Link className="nav_links links" to="/user" onClick={() => hideMobileMenu()}> <AccountCircleIcon /> </Link>
                            </div>
                        </div>

                    </div>
                    <div className={`navbar__toggle ${mobileMenu ? "active" : ""}`} id="bar" onClick={() => toggleMobileMenu()}>
                        <span className="bar" id="bar"></span>
                        <span className="bar" id="bar"></span>
                        <span className="bar" id="bar"></span>
                    </div>
                </div>
            </div>

            {cartOpen && <SideBarCart cartOpen={cartOpen} setCartOpen={setCartOpen} />}
        </>
    )
}

export default Navbar