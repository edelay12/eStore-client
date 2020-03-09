import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Slider from "./slider";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Slider />{" "}
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
