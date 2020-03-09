import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import Welcome from "./Welcome";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});