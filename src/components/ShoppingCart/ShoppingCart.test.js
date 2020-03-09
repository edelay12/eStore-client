import React from "react";

import ReactDOM from "react-dom";
import { CartProvider } from "../../Contexts/CartContext";

import ShoppingCart from "./ShoppingCart";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <CartProvider>
      <ShoppingCart />
    </CartProvider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
