import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/productContext";
import App from "./components/app/App";
import { CartProvider } from "./contexts/cartContext";

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
