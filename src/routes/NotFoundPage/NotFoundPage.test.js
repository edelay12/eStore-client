import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import NotFoundPage from "./NotFoundPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});