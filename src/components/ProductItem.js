import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity } from '../redux/cart/action';
import { productEntryToCart } from '../redux/inventory/action';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { id, productName, category, imageUrl, price, stock } = product;


    const handleAddToCart = () => {
        if (stock > 0) {
            dispatch(productEntryToCart(id));
            if (cart.find(item => item.id === id)) {
                dispatch(increaseQuantity(id));
            } else {
                dispatch(addToCart(id));
            }
        } else {
            alert("This product is out of stock!");
        }
    }

    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={imageUrl} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{productName}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{stock}</span></p>
                </div>
                <button className="lws-btnAddToCart" disabled={stock === 0} onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;