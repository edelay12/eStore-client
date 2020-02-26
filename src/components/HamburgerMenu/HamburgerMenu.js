import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Utils/Utils' 
import TokenService from '../../services/token-service'
import Slide from 'react-reveal/Slide'
import MainSearch from '../MainSearch/mainSearch'
import Fade from 'react-reveal/Fade'
import './HamburgerMenu.css'
 
export default class HamburgerMenu extends Component {
    renderLogoutLink() {
        return (
          <div className="Header__logged-inMenu">
            <Link onClick={this.props.close} to="/"><span className='logoutLinkMenu'>
              Logout
              </span>
            </Link>
          </div>
        );
      }

    renderLoginLink() {
        return (
          <div className="Header__not-logged-inMenu">
            <Link to="/register"><Button onClick={this.props.close}>Register</Button></Link>
            <Link to="/login"><span className='loginLinkMenu' onClick={this.props.close}>Log in</span></Link>
          </div>
        );
      }
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <Slide down duration={1000}>
      <section className='burgerLinks'>
          <Slide left cascade>
          <div className='searchBoxMenu'>
            <MainSearch products={this.props.products}/>
        </div> 
       <div className="navLinksBurger">
          <span onClick={this.props.close}>
            <Link to="/admin/1">Admin</Link>
          </span>
          <span onClick={this.props.close}>
            <Link to="/shop">Shop</Link>
          </span>
          <span onClick={this.props.close}>
            <Link to="/">About</Link>
          </span>
       
       
          </div>
          <div className="loginBoxMenu">
          {
            TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
          }
        </div>
          </Slide>
      </section>
      </Slide>
    );
  }
}