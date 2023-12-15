import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import WishList from "../pages/WishList/WishList";
import Store from "../pages/Store/Store";
import User from "../pages/user/User";
import Notification from "../components/Notification/Notification";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Notification />
            <Outlet />
            <Footer />
        </>
    )
}


const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:id",
                element: <Product />
            },
            {
                path: "/store",
                element: <Store />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/wishlist",
                element: <WishList />
            },
            {
                path: "/user",
                element: <User />
            },
        ]
    },
]

export default routes;