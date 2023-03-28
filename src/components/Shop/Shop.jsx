import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='Shop-container'>
            <div className='products-container'>
                <h2>this is card ; {products.length}</h2>

            </div>
            <div className='cart-container'>
                <h3>this is summery</h3>
                </div>
            
        </div>
    );
};

export default Shop;