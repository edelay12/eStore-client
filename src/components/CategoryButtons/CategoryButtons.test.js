import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import CategoryButtons from "./CategoryButtons";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <CategoryButtons />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
