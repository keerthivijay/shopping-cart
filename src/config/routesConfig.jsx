import {
    ProductDetails,
    CartDetails,
    ProductList,
    Contact,
    DeliveryDetails,
    PaymentDetails,
    OrderSuccess,
    OrderFailure,
    Home,
    OrderDetails,
    UserLogin,
    SignUp,
} from './lazyPages.jsx'

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