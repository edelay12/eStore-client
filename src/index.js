import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Contexts/ProductContext";
import App from "./components/app/App";
import { CartProvider } from "./Contexts/CartContext";

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
