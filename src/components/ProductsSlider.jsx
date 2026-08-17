import Product from './Product';

const ProductsSlider = ({products, title}) => {

    return(
        <>
            <h2>{title.charAt(0).toUpperCase()+title.slice(1)}</h2>
            <div className="products">
                {/* <BuggyComponent /> */}
                {products.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    products.slice(0,5).map((product) => (
                        <Product key={product.id} {...product} />
                    ))
                )}
            </div>
        </>
    )
}

export default ProductsSlider;