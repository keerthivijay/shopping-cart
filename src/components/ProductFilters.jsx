import { useEffect, useRef, useState } from "react";

const ProductFilters = ( {products, setFinalProducts}) => {
    
    const rangeProgressRef = useRef();
    const [brands, setBrands] = useState();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [startFilter, setStartFilter] = useState(products);
    const [filteredProds, setFilteredProds] = useState(products);

    const allBrands = products.filter(val => val.brand!==undefined).map((val) => ({ "brand": val.brand, "alias": (val.brand).toLocaleLowerCase()}) );

    const selectBrands = (e) => {
        const selBrandsCB = document.querySelectorAll('.filter-checkbox input[type="checkbox"]:checked');
        const selBrands = Array.from(selBrandsCB).map(checkbox => checkbox.value);
        
        let filteredProducts = [];
        if(selBrands.length!==0) {
            filteredProducts = products.filter(product => product.brand !== undefined && selBrands.indexOf((product.brand).toLocaleLowerCase())>=0);
        } else {
            filteredProducts = products;
        }

        setSelectedBrands(selBrands);
        setFilteredProds(filteredProducts);
    }

    const lowestPrice = Math.round(Math.min(...products.map(product => product.price)));
    const highestPrice = Math.round(Math.max(...products.map(product => product.price)));

    const minPricePercent = (minPrice / highestPrice)*100;
    const maxPricePercent = (maxPrice / highestPrice)*100;
    
    const handleTextFilter = (event) => {
        const filtered = allBrands.filter(brandObj => ((brandObj.brand).toLocaleLowerCase()).includes(event.target.value));
        setBrands(filtered);
    }

    const handleMinPrice = (event) => {
        setMinPrice(event.target.value);
        const minPricePercent = (minPrice / highestPrice)*100;
        rangeProgressRef.current.style.left = minPricePercent + '%';
        const finteredProdMin = products.filter(product =>(product.price >= minPrice && product.price <= maxPrice))
        setFilteredProds(finteredProdMin);
    }

    const handleMaxPrice = (event) => {
        setMaxPrice(event.target.value);
        const maxPricePercent = (maxPrice / highestPrice)*100;
        rangeProgressRef.current.style.right = (100 - maxPricePercent) + '%';
        const finteredProdMin = products.filter(product => (product.price >= minPrice && product.price <= maxPrice))
        setFilteredProds(finteredProdMin);
    }

    useEffect(() => {
        setMaxPrice(highestPrice);
        setMinPrice(lowestPrice);
        setBrands(allBrands);
    }, []);

    useEffect(()=>{
        setFinalProducts(prev => [...filteredProds]);
    },[minPrice, maxPrice, selectedBrands]);

    return (
        <div className="product-filters">
            <div className="filter-group">
                <div className="filter-title">Brands</div>
                <input type="text" name="textFilter" autoComplete="off" className="filter-text" id="textFilter" placeholder="Seach" onChange={handleTextFilter} />
                <ul className="filter-checkbox" onClick={selectBrands}>
                    {brands?.map((brand, index) =>
                        (<li><input type="checkbox" key={index} name={brand.alias} id={brand.alias} value={brand.alias} /><label htmlFor={brand.alias}>{brand.brand}</label></li>)
                    )}
                </ul>
            </div>
            <div className="filter-group">
                <div className="filter-title">Price</div>
                <div className="filter-range">
                    <div className="price-range">
                        <div className="range-bar"></div>
                        <div className="range-bar-progress" ref={rangeProgressRef}></div>
                        <div className="price-range-progress">
                            <input type="range" name="min-slide" className="min-slide" onChange={handleMinPrice} min={0} max={highestPrice} step={1} value={minPrice} />
                            <input type="range" name="max-slide" className="max-slide" onChange={handleMaxPrice} min={0} max={highestPrice} step={1} value={maxPrice} />
                        </div>
                    </div>
                    <div className="price-min-max">
                        <label htmlFor="min">Min</label><input type="number" name="min" id="min" autoComplete="off" min={0} max={highestPrice} onChange={handleMinPrice} value={minPrice} className="price-min" />
                        <label htmlFor="max">Max</label> <input type="number" name="max" id="max" autoComplete="off" min={0} max={highestPrice} onChange={handleMaxPrice} value={maxPrice} className="price-max" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilters;