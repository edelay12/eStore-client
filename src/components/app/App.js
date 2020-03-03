import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProductApiService from "../../services/product-api-service";
import IdleService from "../../services/idle-service";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import ProductContext from "../../Contexts/ProductContext";
import PrivateRoute from "../../components/Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import Header from "../Header/header";
import LoginPage from "../../routes/loginPage/loginPage";
import RegisterForm from "../../routes/registerPage/registerPage";
import About from "../../routes/About/about";
import Shop from "../../routes/shop/shop";
import ItemPage from "../../routes/itemPage/itemPage";
import Admin from "../../routes/admin/admin";
import Welcome from "../../routes/welcomePage/Welcome";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import ProductListPage from "../../routes/products-list-page/product-list-page";
import "./App.css";

class App extends Component {
  static contextType = ProductContext;
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    ProductApiService.getProducts()
      .then(this.context.setProducts)
      .then(() => {
        console.log(this.context.products);
      })
      .catch(this.context.setError);

    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header products={this.context.products} />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="error">Sorry, there was an error</p>
          )}

          <Switch>
            <Route exact path={"/"} component={Welcome} />
            <Route exact path={"/about"} component={About} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/register"} component={RegisterForm} />
            <PrivateRoute exact path={"/shop"} component={Shop} />
            <PrivateRoute
              exact
              path={"/shop/collections"}
              component={ProductListPage}
            />
            <PrivateRoute
              exact
              path={"/shop/collections/:collection"}
              component={ProductListPage}
            />
            <PrivateRoute
              exact
              path={"/shop/collections/:collection/:value"}
              component={ProductListPage}
            />
            <PrivateRoute exact path={"/shop/:itemId"} component={ItemPage} />
            <PrivateRoute path={"/admin/:adminId"} component={Admin} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
