import React, { Component } from "react";
import "./itemPage.css";
import ProductContext from "../../Contexts/ProductContext";
import ProductApiService from "../../services/product-api-service";
import { AddToCartButton } from "../../components/Utils/Utils";

export default class ItemPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = ProductContext;
  state = {
    show: false
  };
  componentDidMount() {
    const { itemId } = this.props.match.params;
    ProductApiService.getProduct(itemId)
      .then(this.context.setProduct)
      .catch(err => console.log(err))
      .then(this.setState({ show: true }));
  }

  componentWillUnmount() {
    this.context.clearProduct();
  }

  addToCart = product => {
    this.context.addToCart(product);
  };
  render() {
    const { product } = this.context;

    return (
      <React.Fragment>
        <section className="ItemPage">
          <img id="itemImg" src={product.picture_main} alt="" />
          <div className="ItemPage_ItemDetails">
            <h1 id="itemName">{product.product_name}</h1>
            <h3 id="itemRoast">Roast: {product.product_roast}</h3>
            <h3 id="itemRoast">Origin: {product.origin}</h3>
            <h4 id="itemDetails">{product.details}</h4>
            <h3> if on sale</h3>
            <h3 id="itemPrice">Price: ${product.price}</h3>
            <div className="ItemPage_addButton">
              <AddToCartButton product={product} />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
