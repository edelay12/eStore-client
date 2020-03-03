import React, { Component } from "react";
import CartContext from "../../Contexts/CartContext";
import { format as formatDate } from "date-fns";
import "./Utils.css";

export function NiceDate({ date, format = "Do MMMM YYYY" }) {
  return formatDate(date, format);
}

export function FormattedPrice(number) {
  return (Math.round(number * 100) / 100).toFixed(2);
}

export class AddToCartButton extends Component {
  static contextType = CartContext;
  render() {
    return (
      <button
        className="Button"
        onClick={() => {
          this.context.addToCart(this.props.product);
        }}
      >
        Add to cart
      </button>
    );
  }
}

export function Hyph() {
  return <span className="Hyph">{" - "}</span>;
}

export function Button({ className, ...props }) {
  return <button className={["Button", className].join(" ")} {...props} />;
}

export function Textarea({ className, ...props }) {
  return <textarea className={["Textarea", className].join(" ")} {...props} />;
}

export function Input({ className, ...props }) {
  return <input className={["Input", className].join(" ")} {...props} />;
}

export function Required({ className, ...props }) {
  return (
    <span className={["Required", className].join(" ")} {...props}>
      &#42;
    </span>
  );
}

export function Section({ className, list, ...props }) {
  const classes = ["Section", list && "Section--list", className]
    .filter(Boolean)
    .join(" ");
  return <section className={classes} {...props} />;
}
