import { UserProfile, OrderList } from './lazyPages.jsx';


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