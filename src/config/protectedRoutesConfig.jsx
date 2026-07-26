import UserProfile from '../page/UserProfile.jsx';
import OrderList from '../page/OrderList.jsx';


export const protectedRoutesConfig = [
    {
        path: "/user-profile",
        element: <UserProfile />
    },
    {
        path: "/orders",
        element: <OrderList />
    }
];