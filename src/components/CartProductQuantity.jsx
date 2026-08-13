import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartProductQty } from '../store/ProductSlice';

const CartProductQuantity = ({ productId, initialQuantity }) => {

    const [quantity, setQuantity] = useState(initialQuantity);
    const dispatch = useDispatch();

    const handleQuantityChange = (action) => {
        let nextQuantity = quantity;

        if (action === 'add') {
            nextQuantity += 1;
        } else if (action === 'remove' && quantity > 1) {
            nextQuantity -= 1;
        }

        setQuantity(nextQuantity);
        dispatch(setCartProductQty({ productId, quantity: nextQuantity }));
    };

    return (
        <>
            <button className="btn-add" onClick={() => handleQuantityChange('add')}>+</button>
            {quantity}
            <button className="btn-remove" onClick={() => handleQuantityChange('remove')}>-</button>
        </>
    );
};

export default CartProductQuantity;