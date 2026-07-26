import ProductDetails from '../page/ProductDetails.jsx'
import CartDetails from '../page/CartDetails.jsx'
import ProductList from '../page/ProductList.jsx'
import Contact from '../page/Contact.jsx'
import DeliveryDetails from '../page/DeliveryDetails.jsx'
import PaymentDetails from '../page/PaymentDetails.jsx'
import OrderSuccess from '../page/OrderSuccess.jsx'
import OrderFailure from '../page/OrderFailure.jsx'
import Home from '../page/Home.jsx'
import OrderDetails from '../page/OrderDetails.jsx'
import OrderList from '../page/OrderList.jsx'
import UserLogin from '../page/UserLogin.jsx'
import SignUp from '../page/SignUp.jsx'

export const routesConfig = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cart",
        element: <CartDetails />
    },
    {
        path: "/payment",
        element: <PaymentDetails />
    },
    {
        path: "/order-success",
        element: <OrderSuccess />
    },
    {
        path: "/order-failure",
        element: <OrderFailure />
    },
    {
        path: "/order-details/:id",
        element: <OrderDetails />
    },
    {
        path: "/delivery",
        element: <DeliveryDetails />
    },
    {
        path: "/products",
        element: <ProductList />
    },
    {
        path: "/product/:id",
        element: <ProductDetails />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/user-login",
        element: <UserLogin />
    },
    {
        path: "/contact",
        element: <Contact />
    }
];