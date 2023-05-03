import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/inventory/action';
import ProductItem from './ProductItem';

const Inventory = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [productInfo, setProductInfo] = useState({
        name: "",
        category: "",
        image: "",
        price: "",
        quantity: ""
    });

    const handleChange = (event) => {
        setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
    };

    const inventoryEntryHandler = ({ productInfo, event }) => {

        // validation for empty input
        const isEmpty = Object.values(productInfo).some(x => x === null || x === '');
        const isValidQuantity = parseInt(productInfo?.quantity) > 0 ? true : false;
        event.preventDefault();
        if (!isEmpty) {
            if (isValidQuantity) {
                dispatch(addProduct({
                    productName: productInfo.name,
                    category: productInfo.category,
                    imageUrl: productInfo.image,
                    price: productInfo.price,
                    quantity: productInfo.quantity,
                    stock: productInfo.quantity
                }));
                setProductInfo(
                    {
                        name: "",
                        category: "",
                        image: "",
                        price: "",
                        quantity: ""
                    }
                )
            } else {
                alert("Please enter positive integar number as quantity!");
            }
        } else {
            alert("Please Select all the information to proceed!");
        }

    }

    return (
        <div className="py-16">
            <div className="productWrapper">
                {/* <!-- products container --> */}
                <div className="productContainer" id="lws-productContainer">
                    {
                        products?.length > 0
                            ?
                            products.map(product => <ProductItem key={product.id} product={product} />)
                            :
                            <h1> No Products found</h1>
                    }
                </div>
                {/* <!-- products container ends --> */}

                <div>
                    {/* <!-- Product Input Form --> */}
                    <div className="formContainer">
                        <h4 className="formTitle">Add New Product</h4>
                        <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                            {/* <!-- product name --> */}
                            <div className="space-y-2">
                                <label htmlFor="name">Product Name</label>
                                <input className="addProductInput" id="lws-inputName" type="text" name="name" required value={productInfo.name} onChange={handleChange} />
                            </div>
                            {/* <!-- product category --> */}
                            <div className="space-y-2">
                                <label htmlFor="category">Category</label>
                                <input className="addProductInput" id="lws-inputCategory" type="text" name="category" required value={productInfo.category} onChange={handleChange} />
                            </div>
                            {/* <!-- product image url --> */}
                            <div className="space-y-2">
                                <label htmlFor="image">Image Url</label>
                                <input className="addProductInput" id="lws-inputImage" type="text" name="image" required value={productInfo.image} onChange={handleChange} />
                            </div>
                            {/* <!-- price & quantity container --> */}
                            <div className="grid grid-cols-2 gap-8 pb-4">
                                {/* <!-- price --> */}
                                <div className="space-y-2">
                                    <label htmlFor="price">Price</label>
                                    <input className="addProductInput" type="number" id="lws-inputPrice" name="price" required value={productInfo.price} onChange={handleChange} />
                                </div>
                                {/* <!-- quantity --> */}
                                <div className="space-y-2">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input className="addProductInput" type="number" id="lws-inputQuantity" name="quantity" required value={productInfo.quantity} onChange={handleChange} />
                                </div>
                            </div>
                            {/* <!-- submit button --> */}
                            <button type="submit" id="lws-inputSubmit" className="submit" onClick={(event) => { inventoryEntryHandler({ productInfo, event }) }}>Add Product</button>
                        </form>
                    </div>
                    {/* <!-- Product Input Form Ends --> */}
                </div>
            </div>
        </div>
    );
};

export default Inventory;