import {Outlet, Navigate} from 'react-router-dom';

function ProtectedRoute({children}) {

    const isAuthenticated = localStorage.getItem('isAuthenticated') == 'true';

    if(!isAuthenticated) {
        return <Navigate to="/user-login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;