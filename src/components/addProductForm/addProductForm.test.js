import React from "react";

import ReactDOM from "react-dom";

import AddProductForm from "./AddProductForm";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AddProductForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
