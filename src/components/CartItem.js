import React from 'react';
import { useDispatch } from 'react-redux';
import { decreseQuantity, deleteItem, increaseQuantity } from '../redux/cart/action';
import { productDeleteFromCart, productEntryToCart, productRemoveFromCart } from '../redux/inventory/action';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const { id, productName, category, imageUrl, price, stock, cartQuantity } = product;

    const deleteFromCart = () => {
        dispatch(deleteItem(id));
        dispatch(productDeleteFromCart(id))
    }
    const incrementHandler = () => {
        if (stock > 0) {
            dispatch(increaseQuantity(id));
            dispatch(productEntryToCart(id));
        } else {
            alert("This product is out of stock!");
        }
    }

    const decrementHandler = () => {
        if (cartQuantity > 1) {
            dispatch(decreseQuantity(id));
            dispatch(productRemoveFromCart(id))
        } else {
            deleteFromCart();
        }
    }

    return (

        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img className="lws-cartImage" src={imageUrl} alt="product" />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{productName}</h4>
                    <p className="lws-cartCategory">{category}</p>
                    <p>BDT <span className="lws-cartPrice">{price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity" onClick={incrementHandler}>
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">{cartQuantity}</span>
                    <button className="lws-decrementQuantity" onClick={decrementHandler}>
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{parseInt(cartQuantity) * parseInt(price)}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart" onClick={deleteFromCart}>
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CartItem;