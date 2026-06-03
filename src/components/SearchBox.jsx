import { useEffect, useState, ref, useRef } from "react";
import { Link } from "react-router";

function SearchBox({products}) {

    const [result, setResult] = useState([]);
    const [searchText, setSearchText] = useState("");
    const searchBox = useRef(null);

    async function searchProducts(e) {
        const val = e.target.value;
        setSearchText(val);
        console.log(e.target.value);
        // let res = await fetch('https://dummyjson.com/products/search?q={val}')
        // .then(res => {
        //     res.json();
        //     if(res.products?.length > 0){
        //         res.products? setResult( ...res.products) : '';
        //     }
            
        // });
        //.then(console.log);
        
        // console.log(res);
        // setResult(...[], [...res.products]);

        const newResult = products.filter( product => product.title.toLowerCase().includes(val.toLowerCase()))

        setResult(newResult);
    }

    const clearSearch =() => {
        console.log(searchText);
        
        searchBox.current.value='';
        setSearchText("");
    }

    return(
        console.log(result),
        <div className="search-bar">
            <input type="text" name="search" ref={searchBox} id="search" className="search-input" autoComplete="off" onChange={searchProducts} />
            <input type="button" className="btn-search" id="searchBtn" value="x" onClick={clearSearch} />
            <div className={searchText==""?'search-result':'search-result-active'} onClick={clearSearch}>
                {result.map((product,index) => (
                    <Link to={`/product/${product.id}`}><div className="search-product" key={index}><img src={product.thumbnail} alt={product.title} /> <span className="search-product-title">{product.title}</span></div></Link>
                ))}
                {result.length === 0 && searchText !== "" && (
                    <div className="search-product"><span > No products!</span></div>
                )}
                {/* <div className="search-product"><Link to={"/product/1"}> <img src={"dssfsd"} alt={"p1"} /> sample 1!</Link></div>
                <div className="search-product"><Link to={"/product/2"}> <img src={"dssfsd"} alt={"p2"} /> Sample2!</Link></div> */}
            </div>
        </div>
    );
}

export default SearchBox;