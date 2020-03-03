import React, { Component } from "react";
import CartContext from "../../Contexts/CartContext";
import "./ShoppingCart.css";
import { Button, FormattedPrice } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class ShoppingCart extends Component {
  static contextType = CartContext;

  handleCheckout = () => {
    TokenService.clearCart();
    //post to cart
  };

  render() {
    const { cart, total } = this.context;
    return (
      <div className="cartBg">
        <Slide right duration={500}>
          <form className="shoppingCartForm" onSubmit={this.handleCheckout}>
            <h1>Shopping Cart</h1>
            <section className="cartProductList">
              {cart.map(item => (
                <div className="cartItem">
                  <span>{item.product.product_name}</span>
                  <span>${item.product.price}</span>
                  <div className="quantityContainer">
                    <button
                      id="shoppingCartDelete"
                      type="button"
                      onClick={() => this.context.deleteItem(item.product.id)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <input
                      className="quantityInput"
                      type="number"
                      onChange={e =>
                        this.context.updateQuantity(
                          item.product.id,
                          e.target.value
                        )
                      }
                      defaultValue={item.quantity}
                      step={1}
                    />
                  </div>
                </div>
              ))}
            </section>

            <Flip left cascade spy={this.context.total}>
              <section className="cartTotalArea">
                {this.context.cart.length > 0 && (
                  <span>Total: ${FormattedPrice(total)}</span>
                )}
              </section>
            </Flip>
            <Button type="submit">Checkout</Button>
          </form>
        </Slide>
      </div>
    );
  }
}
