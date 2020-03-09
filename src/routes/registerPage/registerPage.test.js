import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import RegisterPage from "./registerPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});