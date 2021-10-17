import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h3 style={{ color: '#3737a8' }}>{name}</h3>
                <p>By {seller}</p>
                <h4>Price {price}</h4>
                <p><small>Only {stock} items left, order now!</small></p>
                <button
                    className='cart-btn'
                    onClick={() => props.handleEvent(props.product)}>
                    Add to cart {cartIcon}</button>
            </div>
        </div>
    );
};

export default Product;