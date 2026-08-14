import { useEffect, useState, ref, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { debounce } from '../utils/debounce';

function SearchBox() {

    const [result, setResult] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchBox = useRef(null);
    const navigate = useNavigate();
    const containerRef = useRef();

    const products = useSelector((state) => state.product.productList);

    const searchProducts = (e) => {
        setSearchText(e.target.value);
        debounceSearch(e.target.value);
    }

    const debounceSearch = debounce((searchText) => {
        const result = seachResult(searchText);
        setResult(result);
    }, 300);

    const seachResult = (searchText) => {
        return products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    const clearSearch = () => {
        searchBox.current.value = '';
        setSearchText("");
    }

    const handleKeyDown = (e) => {

        if (result.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => prev === result.length - 1 ? prev : prev + 1);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => prev === 0 ? 0 : prev - 1);
        } else if (e.key === 'Enter' || e.key === 'Escape') {
            e.preventDefault();
            setSelectedIndex(-1);
            setResult([]);
            clearSearch();
            searchBox.current.blur();
            e.key === 'Enter'?navigate(`/product/${result[selectedIndex].id}`):'';
        }
    }

    useEffect(() => {
        if (selectedIndex < 0 || !containerRef.current) return;

        const activeItem = containerRef.current.children[selectedIndex];

        if (activeItem) {
            activeItem.scrollIntoView({
                behavior: 'smooth', // Or 'auto' for instant jump
                block: 'nearest',   // Keeps it visible within the closest scrollable parent
            });
        }
    }, [selectedIndex]);

    return (
        <div className="search-bar">
            <input type="text" name="search" ref={searchBox} id="search" className="search-input" autoComplete="off" placeholder="Search products" onKeyDown={handleKeyDown} onChange={searchProducts} />
            <img className="search-icon" src="../src/assets/magnifying-glass.png" />
            <i className="btn-search-clear" onClick={clearSearch}><img className="btn-search-clear" src="../src/assets/close.png" /></i>
            <ul ref={containerRef} className={searchText == "" ? 'search-result' : 'search-result-active'} onClick={clearSearch}>
                {result?.map((product, index) => (
                    <Link to={`/product/${product.id}`}>
                        <li className={index === selectedIndex ? `selected-index search-product` : `search-product`} key={index}>
                            <img src={product.thumbnail} alt={product.title} />
                            <span className="search-product-title">{product.title}</span>
                        </li>
                    </Link>
                ))}
                {result?.length === 0 && searchText !== "" && (
                    <li className="search-product"><span > No products!</span></li>
                )}
            </ul>
        </div>
    );
}

export default SearchBox;