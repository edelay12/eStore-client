import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import Admin from "./admin";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Admin />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});