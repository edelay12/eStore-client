import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/loginForm'
import { Redirect } from 'react-router-dom'

export default class LoginPage extends Component {
    static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
    }
  
    handleLoginSuccess = () => {
      console.log('success')
     window.location.href = '/shop';
    }
  
    render() {
      return (
        <section className='LoginPage'>
          <h2 id="loginText">Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </section>
      )
    }
  }
  