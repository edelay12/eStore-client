import React, { Component } from "react";
import { AddToCartButton } from "../../components/Utils/Utils";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductContext from "../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import "./product-list-page.css";
import ProductApiService from "../../services/product-api-service";

export default class ProductListPage extends Component {
  static contextType = ProductContext
  
  state = {
    products: [],
    filter: false,
    error: false
  };

  componentDidMount() {
   ProductApiService.getProducts().then(products => {
     this.setState({ products : products})
   }).then(() => {
    const { collection, value } = this.props.match.params;
    console.log("collection" + collection);
    console.log("value" + value);
    if (!collection && !value) return this.filter("all");
    if (collection == "sale") return this.filter("sale");
    if (collection == "featured") return this.filter("featured");
    this.filter(collection, value);
  }).catch(error => this.setState({error : true}))
}
  componentWillReceiveProps() {
    ProductApiService.getProducts().then(products => {
      this.setState({ products : products})
    }).then(() => {
     const { collection, value } = this.props.match.params;
     console.log("collection" + collection);
     console.log("value" + value);
     if (!collection && !value) return this.filter("all");
     if (collection == "sale") return this.filter("sale");
     if (collection == "featured") return this.filter("featured");
     this.filter(collection, value);
   }).catch(error => this.setState({error : true}))

  }

  filter = (collection, value) => {
    let filter = "";
    switch (collection) {
      case "all":
        return this.setState({ filter: false });
      case "temp":
        filter = "collection";
        break;
      case "roast":
        filter = "product_roast";
        break;
      case "origin":
        filter = "origin";
        break;

      case "sale":
        const sale = this.state.products.filter(product => {
          return product.sale == true;
        });
        console.log(sale);
        return this.setState({ filter: true, products: sale });

      case "featured":
        const featured = this.state.products.filter(product => {
          return product.featured == true;
        });
        console.log(featured);
        return this.setState({ filter: true, products: featured });
    }

    const results = this.state.products.filter(product => {
      return product[filter].toLowerCase() == value;
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
          <Sidebar products={this.state.products} />
        </div>
        <div className="product-list-box">
          <h3 className="productListLable">
            Products ({this.state.products.length})
          </h3>
          {this.state.error && <h1 style={{color : 'red'}}>Sorry, there was an error</h1>}
          <section className="productGrid">
            {this.state.filter == true
              ? this.state.products.map(product => (
                <div>
                <div className="main-product-frame">
                  <Link to={`/shop/${product.id}`}>
                    <div className='details-container'>
                    <img
                      id="product-img"
                      src={product.picture_main}
                      alt="mian-product-image"
                    />
                    <span id="product-title">{product.product_name}</span>
                    <span id="product-price">{product.price}</span>
                    </div>
                  </Link>
                  <AddToCartButton product={product} />
                </div>
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
                      <AddToCartButton product={product} />
                    </div>
                  </div>
                ))}
          </section>
        </div>
      </div>
    );
  }
}
