import { NavLink } from "react-router";

function Menu() {
    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <NavLink to="/" className="menu-link">
                        Home
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/products" className="menu-link">
                        Products
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/contact" className="menu-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;