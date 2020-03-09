import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import MainSearch from "./mainSearch";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <MainSearch />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
