import { useEffect, useMemo, useRef, useState } from "react";

const ProductFilters = ({ products, setFinalProducts }) => {
  const rangeProgressRef = useRef();
  const [filterText, setFilterText] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [filteredProds, setFilteredProds] = useState(products);

  const allBrands = useMemo(() => {
    const uniqueBrands = Array.from(
      new Set(products.map((product) => product.brand).filter(Boolean))
    );
    return uniqueBrands.map((brand) => ({ brand, alias: brand.toLowerCase() }));
  }, [products]);

  const visibleBrands = useMemo(() => {
    if (!filterText) return allBrands;
    return allBrands.filter((brandObj) =>
      brandObj.brand.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [allBrands, filterText]);

  const lowestPrice = products.length ? Math.round(Math.min(...products.map((product) => product.price))) : 0;
  const highestPrice = products.length ? Math.round(Math.max(...products.map((product) => product.price))) : 0;

  useEffect(() => {
    setMinPrice(lowestPrice);
    setMaxPrice(highestPrice);
    setFilteredProds(products);
  }, [products, lowestPrice, highestPrice]);

  useEffect(() => {
    let updatedProducts = products;

    if (selectedBrands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedBrands.includes(product.brand?.toLowerCase())
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    setFilteredProds(updatedProducts);
  }, [products, selectedBrands, minPrice, maxPrice]);

  useEffect(() => {
    setFinalProducts([...filteredProds]);
  }, [filteredProds, setFinalProducts]);

  const toggleBrand = (brandAlias) => {
    setSelectedBrands((prev) =>
      prev.includes(brandAlias)
        ? prev.filter((alias) => alias !== brandAlias)
        : [...prev, brandAlias]
    );
  };

  const handleTextFilter = (event) => {
    setFilterText(event.target.value);
  };

  const handleMinPrice = (event) => {
    const value = Number(event.target.value);
    setMinPrice(value);
    if (rangeProgressRef.current && highestPrice) {
      rangeProgressRef.current.style.left = `${(value / highestPrice) * 100}%`;
    }
  };

  const handleMaxPrice = (event) => {
    const value = Number(event.target.value);
    setMaxPrice(value);
    if (rangeProgressRef.current && highestPrice) {
      rangeProgressRef.current.style.right = `${100 - (value / highestPrice) * 100}%`;
    }
  };

  return (
    <div className="product-filters">
      <div className="filter-group">
        <div className="filter-title">Brands</div>
        <input
          type="text"
          name="textFilter"
          autoComplete="off"
          className="filter-text"
          id="textFilter"
          placeholder="Search"
          value={filterText}
          onChange={handleTextFilter}
        />
        <ul className="filter-checkbox">
          {visibleBrands.map((brand) => (
            <li key={brand.alias}>
              <input
                type="checkbox"
                name={brand.alias}
                id={brand.alias}
                value={brand.alias}
                checked={selectedBrands.includes(brand.alias)}
                onChange={() => toggleBrand(brand.alias)}
              />
              <label htmlFor={brand.alias}>{brand.brand}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-group">
        <div className="filter-title">Price</div>
        <div className="filter-range">
          <div className="price-range">
            <div className="range-bar"></div>
            <div className="range-bar-progress" ref={rangeProgressRef}></div>
            <div className="price-range-progress">
              <input
                type="range"
                name="min-slide"
                className="min-slide"
                onChange={handleMinPrice}
                min={0}
                max={highestPrice}
                step={1}
                value={minPrice}
              />
              <input
                type="range"
                name="max-slide"
                className="max-slide"
                onChange={handleMaxPrice}
                min={0}
                max={highestPrice}
                step={1}
                value={maxPrice}
              />
            </div>
          </div>
          <div className="price-min-max">
            <label htmlFor="min">Min</label>
            <input
              type="number"
              name="min"
              id="min"
              autoComplete="off"
              min={0}
              max={highestPrice}
              onChange={handleMinPrice}
              value={minPrice}
              className="price-min"
            />
            <label htmlFor="max">Max</label>
            <input
              type="number"
              name="max"
              id="max"
              autoComplete="off"
              min={0}
              max={highestPrice}
              onChange={handleMaxPrice}
              value={maxPrice}
              className="price-max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;