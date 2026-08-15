const ProductSort = ({ products, setFinalProducts }) => {

    const handleSort = (e) => {
        const type = e.target.value;
        let sorted = [...products];
        if (type === 'lowtohigh') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (type === 'hightolow') {
            sorted.sort((a, b) => b.price - a.price);
        }
        setFinalProducts([...sorted]);
    }

    return (
        <div className='product-sort'>
            <label htmlFor='sort'>Sort by<i className="icon-sort"></i></label>
            <select id='sort' name='sort' onChange={handleSort}>
                <option value={''}>None</option>
                <option value={"lowtohigh"}>Price Low to High</option>
                <option value={"hightolow"}>Price High to Low</option>
            </select>
        </div>
    )
}

export default ProductSort;