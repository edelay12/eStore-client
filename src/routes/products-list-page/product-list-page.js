import React, { Component } from "react";
import {AddToCartButton} from '../../components/Utils/Utils'
import Sidebar from "../../components/sidebar/sidebar";
import ProductContext from '../../contexts/productContext'
import { Link } from "react-router-dom";
import "./product-list-page.css";
import '../../components/product-grid/product-grid.css'

export default class ProductListPage extends Component {
  static contextType = ProductContext;
  state = {
    products: [],
    filter: false
  };

  componentDidMount() {
    this.setState({ products: this.context.products });
  }

  filter = (e) => {
    let item = "";
    switch (e.target.name) {
      case "all":
        return this.setState({ filter: false });
      case "collection":
        item = "collection";
        break;
      case "roast":
        item = "product_roast";
        break;
      case "origin":
        item = "origin";
        break;
    }
    const results = this.context.products.filter(product => {
      return product[item].toLowerCase() == e.target.value.toLowerCase();
    });
    this.setState({ filter: true, products: results });
  };

  componentWillUnmount() {
    this.setState({ filter: false });
  }

  render() {
    return (
      <div className="mainBox">
        <div className="sidebar-box">
          <Sidebar
            products={this.context.products}
            filter={this.filter}
          />
        </div>
        <div className="product-list-box">
          <section className="productGrid">
            {this.state.filter == true
              ? this.state.products.map(product => (
                  <div>
                    <Link to={`/shop/${product.id}`}>
                      <div className="main-product-frame">
                        <img
                          id="product-img"
                          src={product.picture_main}
                          alt="mian-product-image"
                        />
                        <span id="product-title">{product.product_name}</span>
                        <span id="product-price">{product.price}</span>
                        
                      </div>
                    </Link>
                    <AddToCartButton product={product}/>
                  </div>
                ))
              : this.context.products.map(product => (
                  <div>
                   
                      <div className="main-product-frame">
                      <Link to={`/shop/${product.id}`}>
                        <img
                          id="product-img"
                          src={product.picture_main}
                          alt="mian-product-image"
                        />
                        <span id="product-title">{product.product_name}</span>
                        <span id="product-price">{product.price}</span>
                        </Link>
                        <AddToCartButton product={product}/>
                      </div>
                  </div>
                ))}
          </section>
        </div>
      </div>
    );
  }
}
