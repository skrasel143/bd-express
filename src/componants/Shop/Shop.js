import React, { useState, useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleEvent = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key);
    }

    return (
        <div className='shop'>
            <div className="product-section">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleEvent={handleEvent}
                    ></Product>)
                }
            </div>
            <div className="cart-section">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;