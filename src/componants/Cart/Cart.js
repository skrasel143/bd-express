import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalQuantity = 0;
    for (const item of cart) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        total = total + item.price + item.quantity;
        totalQuantity = totalQuantity + item.quantity;
    }

    const tax = total * 0.05;
    let shipping = 0;
    if (total < 50) {
        shipping = total * 0.30;
    } else if (total > 50 && total < 100) {
        shipping = total * 0.10;
    } else if (total > 100 && total < 500) {
        shipping = total * 0.05;
    } else {
        shipping = 0;
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className="price-name">
                <div>
                    <h4>Items ordered</h4> 
                    <h4>Price</h4>
                    <h4>Tax</h4>
                    <h4>Shipping</h4>
                    <h4>Grand Total</h4>
                </div>
                <div>
                    <h4>{totalQuantity}</h4>
                    <h4>{total.toFixed(2)}</h4>
                    <h4>{tax.toFixed(2)}</h4>
                    <h4>{shipping.toFixed(2)}</h4>
                    <h4>{(total + tax + shipping).toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;
            

            