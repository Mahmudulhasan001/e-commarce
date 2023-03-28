import React from 'react';
import'./Product.css';

const Product = (props) => {
    const {img ,seller ,name,ratings ,price, quantity}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <div className='product-info' >
            <p>Price : ${price}</p>
            <p>Rating : {ratings} stars</p>
            <p>Quantity: {quantity}</p>
            </div>
            <button className='btn-cart'>Add to cart </button>
        </div>
    );
};

export default Product;