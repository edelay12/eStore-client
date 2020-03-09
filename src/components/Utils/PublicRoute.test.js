import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import PublicOnlyRoute from "./PublicOnlyRoute";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <PublicOnlyRoute />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
