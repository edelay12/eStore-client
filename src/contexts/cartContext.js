import React, { Component } from "react";
import TokenService from "../services/token-service";
import CartApiService from "../services/cart-api-service";
const CartContext = React.createContext({
  error: null,
  getTotal: () => {},
  setCart: () => {},
  deleteItem: () => {},
  setError: () => {},
  addToCart: () => {},
  updateQuantity: () => {}
});

export default CartContext;

export class CartProvider extends Component {
  state = {
    error: null,
    total: 0,
    cart: [],
    itemsInCart: 0
  };

  setCart = cart => {
    this.setState({ cart }, () => {
      this.getTotal();
    });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  addToCart = product => {
    const cart = this.state.cart;
    for (let i in cart) {
      if (product.id == cart[i].product.id) {
        cart[i].quantity++;
        return this.setState({ cart: cart }, () => {
          this.getTotal();
        });
      }
    }
    const item = { quantity: 1, product: product };
    cart.push(item);
    this.setState({ cart: cart }, () => {
      this.getTotal();
    });
    TokenService.saveCart(this.state.cart);
  };

  getTotal = () => {
    let total = 0;
    let itemsInCart = 0;
    const cart = this.state.cart;
    for (let i in cart) {
      let itemPrice = parseFloat(cart[i].product.price) * cart[i].quantity;
      total += itemPrice;
      itemsInCart += cart[i].quantity;
      console.log(itemsInCart);
    }
    this.setState({ total: total, itemsInCart: itemsInCart });
  };

  updateQuantity = (product, quantity) => {
    //check duplicates
    const newCart = this.state.cart;

    for (let i in newCart) {
      if (product == newCart[i].product.id) {
        newCart[i].quantity = parseInt(quantity);
        this.setState({ cart: newCart });
      }
    }
    this.getTotal();
    TokenService.saveCart(newCart);
  };

  deleteItem = product => {
    const newCart = this.state.cart;
    for (let i in newCart) {
      if (product == newCart[i].product.id) {
        let index = newCart.indexOf(newCart[i].product);
        newCart.splice(index, 1);
        this.setState({ cart: newCart });
      }
    }
    this.getTotal();
    TokenService.saveCart(newCart);
  };

  render() {
    const value = {
      cart: this.state.cart,
      setCart: this.setCart,
      getTotal: this.getTotal,
      deleteItem: this.deleteItem,
      total: this.state.total,
      itemsInCart: this.state.itemsInCart,
      addToCart: this.addToCart,
      updateQuantity: this.updateQuantity
    };
    return (
      <CartContext.Provider value={value}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
