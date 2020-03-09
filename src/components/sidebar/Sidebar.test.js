import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import Sidebar from "./Sidebar";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
