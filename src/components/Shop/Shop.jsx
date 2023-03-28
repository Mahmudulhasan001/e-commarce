import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] =useState([]) ;
    const [cart , setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    const handleCart= (product)=>{
      const newCard =[...cart ,product];
      setCart(newCard);
    }
    return (
        <div className='Shop-container'>
            <div className='products-container'>{
                products.map(product => <Product
                
                key={product.id}
                product={product}
                handleCart ={handleCart}
                >
               </Product>)
            }
            </div>
            <div className='cart-container'>
                <h3>Order summery</h3>
                <p> Selected items :{cart.length}</p>
                </div>
            
        </div>
    );
};

export default Shop;