import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "../../Contexts/ProductContext";
import ReactDOM from "react-dom";

import ItemPage from "./itemPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <ProductsProvider>
        <ItemPage />
      </ProductsProvider>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
