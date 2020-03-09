import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "../../Contexts/ProductContext";
import ReactDOM from "react-dom";

import ProductListPage from "./product-list-page";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <ProductsProvider>
        <ProductListPage />
      </ProductsProvider>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
