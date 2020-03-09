import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import LoginPage from "./loginPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});