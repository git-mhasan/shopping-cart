import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import Inventory from './Inventory';
import logo from './../assets/images/logo.png';


const ShoppingCart = () => {
    const [cartState, setCartState] = useState(false);
    const cart = useSelector(state => state.cart);
    const totalProductInCart = cart.reduce((totalProductInCart, product) => product.cartQuantity + totalProductInCart, 0);

    return (
        <div>
            < nav className="bg-[#171C2A] py-4" >
                <div className="navBar">
                    <button href="index.html" onClick={() => setCartState(false)}>
                        <img src={logo} alt="LWS" className="max-w-[140px]" />
                    </button>

                    <div className="flex gap-4">
                        <button href="#home" className="navHome" id="lws-home" onClick={() => setCartState(false)}> Home </button>
                        <button href="cart.html" className="navCart" id="lws-cart" onClick={() => setCartState(true)}>
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">{totalProductInCart}</span>
                        </button>
                    </div>
                </div>
            </nav >
            {cartState ? <Cart></Cart> : <Inventory></Inventory>}
        </div>
    );
};

export default ShoppingCart;