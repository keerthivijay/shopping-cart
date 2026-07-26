import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const DropdownMenu = () => {

    const userDetails = useSelector((state) => state.user.userDetails);

    const [loginState, setloginState] = useState(userDetails !== null);

    useEffect(() => {
            setloginState(userDetails !== null);
    }, [userDetails]);

    const logout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('isAuthenticated');
        setloginState(false);
    }

    return (
        <ul className="user-menu">
            {!loginState && (
                <>
                    <Link to="/user-login"><li> Login</li></Link>
                    <Link to="/sign-up"><li>Sign-up</li></Link>
                </>
            )}
            {loginState && (
                <>
                    <Link to="/user-profile"><li>Profile</li></Link>
                    <Link to="/orders"><li>Orders</li></Link>
                    <Link to="/user-login" onClick={logout}><li>Logout</li></Link>
                </>
            )}
        </ul>
    );
}

export default DropdownMenu;