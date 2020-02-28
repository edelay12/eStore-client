import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Hyph, Button } from "../Utils/Utils";
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot , faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import "./header.css";
import MainSearch from '../MainSearch/mainSearch'
import IdleService from '../../services/idle-service'
import cartContext from '../../Contexts/CartContext'
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import TokenService from '../../services/token-service'

export default class Header extends Component {
  static contextType = cartContext;
  state = {
    showCart: false,
    burgerOpen: false
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
        <Link to="/register"><Button>Register</Button></Link>
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

  closeBurgerMenu = () => {
    this.setState({burgerOpen: false})
  }

  render() {
    return (
      <nav className="Header">
        {this.state.burgerOpen && (
                  <Fade down duration={500}>
        <div className='burgerMenuContainer'>
          <HamburgerMenu products={this.props.products} close={this.closeBurgerMenu}/>
        </div>
        </Fade>
        )}
        <div className="logoContainer">
        <Flip right cascade delay={400} duration={500} spy={this.state.burgerOpen}><span onClick={() => this.setState({ burgerOpen : !this.state.burgerOpen})} className='hamburgerIcon_header'><FontAwesomeIcon icon={this.state.burgerOpen ? faTimes : faBars} /></span></Flip>
            <Link to="/">
<FontAwesomeIcon className='logoIcon' icon={faMugHot} /><span className='logo'> Java Coffee</span>
            </Link>
        
        </div>

        <div className="navLinks">
          <span>
            <Link to="/admin/1">Admin</Link>
          </span>
          <span>
            <Link to="/shop">Shop</Link>
          </span>
          <span>
            <Link to="/about">About</Link>
          </span>
          </div>

        {TokenService.hasAuthToken() && (
          <React.Fragment>
          <div className='searchBox'>
            <MainSearch products={this.props.products}/>
        </div> 
    <div></div> {/* combine cart and logout   */}
        <div className="cartFavoritesBox">
        <span className={this.context.itemsInCart > 0 ? 'cartNumberShow' : 'cartNumber'}>{this.context.itemsInCart}</span><span className='cartLogo' onClick={this.showCart}><FontAwesomeIcon icon={faShoppingCart}/> Cart</span>
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
