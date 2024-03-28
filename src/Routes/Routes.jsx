import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import Products from "../pages/Products/Products"
import Contact from "../pages/Contact/Contact"
import ServicesDetails from "../pages/ServicesDetails/ServicesDetails"
import ProductDetails from "../pages/ProductDetails/ProductDetails"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/products/:title',
                element: <ProductDetails />
            },
            {
                path: '/services/:title',
                element: <ServicesDetails />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },

        ]
    }
])
export default Routes