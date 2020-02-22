import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './product-grid.css'

export default class ProductGrid extends Component {


    allProducts(products) {
        console.log('products')
        return (
            products.map(product => 
                <div>
                       <Link to={`/shop/${product.id}`}>
                           <div className='main-product-frame'>
                               <img id='product-img' src={product.picture_main} alt='mian-product-image'/>
                               <span id='product-title'>{product.product_name}</span>
                               <span id='product-price'>{product.price}</span>
                           </div> 
                       </Link>
                </div>
            )
        )
    }




    render(){
       // const {products} = this.props
    return (
   
     <> 
     </>
    )
    }
}
