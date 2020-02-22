import React, { Component } from 'react';
import CartContext from '../../contexts/cartContext'
import './ShoppingCart.css'
import { Button } from '../Utils/Utils';
import TokenService from '../../services/token-service';

export default class ShoppingCart extends Component {
static contextType = CartContext;

handleCheckout = () => {
    TokenService.clearCart();
    //post to cart
}

    render(){
       const {cart , total } = this.context
       console.log(cart)
        return (
            <form className='shoppingCartForm' onSubmit={this.handleCheckout}>
                <h1>Shopping Cart</h1>
                <section className='cartProductList'>
                 {cart.map(item => 
                 <div className='cartItem'>
                    <span>{item.product.product_name}</span>
                    <span>{item.product.price}</span>
                    <input className='quantityInput' type='number' onChange={(e) => this.context.updateQuantity(item.product.id , e.target.value)} defaultValue={item.quantity} step={1} />
                    <span>need to get getQuantity</span>
                    <button type='button' onClick={() => this.context.deleteItem(item.product.id)}>delete</button>
                    </div>
                    )}
                    </section>
                    <section className='cartTotalArea'>
                        {this.context.cart.length > 0 && (
                        <span>Total: ${total}</span>
                        )}
                    </section>
                    <button type='submit'>Checkout</button>
            </form>
        )
    }
}