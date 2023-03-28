import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import'./Product.css';

const Product = (props) => {
    const {img ,seller ,name,ratings ,price, quantity}=props.product;
    const handleCart = props.handleCart
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <div className='product-info' >
            <p>Price : ${price}</p>
            <p>Rating : {ratings} stars</p>
            <p>Quantity: {quantity}</p>
            </div>
            <button onClick={()=>handleCart(props.product)} className='btn-cart'>Add to cart 
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;