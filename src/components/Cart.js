import React from 'react';
import { useSelector } from 'react-redux';
import BillDetails from './BillDetails';
import CartItem from './CartItem';

const Cart = () => {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);

    const productsInCart = products.reduce(((productsCart, currentValue) => {
        let cartItem = cart.find(item => item.id === currentValue.id);
        if (!!cartItem) {
            const newProduct = {
                ...currentValue,
                cartQuantity: cartItem.cartQuantity
            }
            return [...productsCart, newProduct]
        }
        return productsCart;
    }), [])


    return (
        <div className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                        {/* <!-- Cart Item --> */}
                        {productsInCart?.length ?
                            productsInCart.map(product => <CartItem key={product.id} product={product} />)
                            : <h1>No item in your cart.</h1>}
                    </div>

                    {/* <!-- Bill Details --> */}
                    <BillDetails productsInCart={productsInCart}></BillDetails>
                </div>
            </div>
        </div>
    );
};

export default Cart;