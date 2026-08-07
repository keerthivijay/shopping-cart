import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import DropdownMenu from './DropdownMenu';

const Header = () => {
    
    const cartCount = useSelector((state) => state.product.cartCount);
    
    return (
        <div className="header">
            <Link to="/">
                <h1>ShopIng</h1>
            </Link>
            <SearchBox />
            <div className="activity-bar">    
                <Link to="/cart">
                    <span className="cart-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.16 14l.84-4h8l.84 4H7.16zM20 4H5.21l-.94-4H1v2h1l3.6 7.59L4.25 13c-.16.28-.25.61-.25.95 0 1.11.89 2 2 2h12v-2H6.42c-.14 0-.25-.11-.25-.25s.11-.２5.２5-.２5h１２．５５c．７５ ０ １．４１－．４１ １．７５－１．０３l３．５８－６．４９A１ １ ０ ００２０ ４z" />
                        </svg>
                        <span className="cart-count">{cartCount}</span>
                    </span>
                </Link>
                <span className="user-icon">
                    <img src="../src/assets/user.png" alt="User Icon" className="user-icon" />
                    <DropdownMenu />
                </span>
            </div>

        </div>
    );
}

export default Header;