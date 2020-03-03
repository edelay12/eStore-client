import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/loginForm";
import "./LoginPage.css";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    window.location.href = "/shop";
  };

  render() {
    return (
      <section className="LoginPage">
        <section className="LoginFormContianer">
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </section>
      </section>
    );
  }
}
