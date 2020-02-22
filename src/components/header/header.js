import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Hyph } from "../Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import MainSearch from '../main-search/mainSearch'
import IdleService from '../../services/idle-service'
import cartContext from '../../contexts/cartContext'
import ShoppingCart from "../cart/ShoppingCart";
import TokenService from '../../services/token-service'

export default class Header extends Component {
  static contextType = cartContext;
  state = {
    showCart: false
  };

  componentDidMount(){
   if(TokenService.hasCart()){
    const cart = TokenService.getCart();
    this.context.setCart(JSON.parse(cart));
  }
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    window.location.reload()
  }

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register">Register</Link>
        <Hyph />
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  showCart = e => {
    if(TokenService.hasAuthToken())
    this.setState({ showCart: true }, () => {
      document.addEventListener("click", this.hideCart);
    });
  };

  hideCart = e => {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ showCart: false }, () => {
        document.removeEventListener("click", this.hideCart);
      });
    }
  };

  render() {
    return (
      <nav className="Header">
        <div className="logoContainer">
          <h1 className='logo'>
            <Link to="/">
              <FontAwesomeIcon icon={faCoffee} /> JAVA CO
            </Link>
          </h1>
        </div>

        <div className="navLinks">
          <h1>
            <Link to="/admin/1">Admin</Link>
          </h1>
          <h1>
            <Link to="/shop">Shop</Link>
          </h1>
          <h1>
            <Link to="/">About</Link>
          </h1>
          </div>

        {TokenService.hasAuthToken() && (
          <React.Fragment>
          <div className='searchBox'>
            <MainSearch products={this.props.products}/>
        </div> 
    
        <div className="cartFavoritesBox">
          <span onClick={this.showCart}>Cart Icon</span>
          {this.state.showCart && (
            <div className='shoppingCartContainer'>
            <div
              className="shoppingCartMain"
              ref={e => {
                this.dropdownMenu = e;
              }}
            >
              <ShoppingCart />
            </div>
            </div>
          )}
          </div>
          </React.Fragment>
          )}

<div className="loginBox">
          {
            TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }
        </div>
      </nav>
    );
  }
}
