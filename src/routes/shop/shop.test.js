import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import Shop from "./shop";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Shop />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});