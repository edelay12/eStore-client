import React, { Component } from "react";
import { AddToCartButton, Button } from "../../components/Utils/Utils";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarMenu from "../../components/SidebarMenu/Sidebar";
import ProductContext from "../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'


import "./product-list-page.css";
import ProductApiService from "../../services/product-api-service";

export default class ProductListPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filter: false,
      setAnimation: false,
      error: false,
      hovering: false,
      hoveringItem: null,
      sidebar: false,
    };
  }
  static contextType = ProductContext;

  handleHover = e => {
    this.setState({ hovering: true, hoveringItem: e });
  };
  handleHoverLeave = () => {
    this.setState({ hovering: false, hoveringItem: null });
  }

  componentDidMount() {
    ProductApiService.getProducts()
      .then(products => {
        this.setState({ products: products });
      })
      .then(() => {
        const { collection, value } = this.props.match.params;
        if (!collection && !value) return this.filter("all");
        if (collection == "sale") return this.filter("sale");
        if (collection == "featured") return this.filter("featured");
        this.filter(collection, value);
      })
      .catch(error => this.setState({ error: true }));
  }

  componentWillReceiveProps() {
    ProductApiService.getProducts()
      .then(products => {
        this.setState({ products: products });
      })
      .then(() => {
        const { collection, value } = this.props.match.params;
        if (!collection && !value) return this.filter("all");
        if (collection == "sale") return this.filter("sale");
        if (collection == "featured") return this.filter("featured");
        this.filter(collection, value);
      })
      .catch(error => this.setState({ error: true }));
  }

  filter = (collection, value) => {
  this.setState({setAnimation: !this.state.setAnimation })  
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
        return this.setState({ filter: true, products: sale });

      case "featured":
        const featured = this.state.products.filter(product => {
          return product.featured == true;
        });
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
<React.Fragment>
<span id='sideBarToggle1' onClick={() => this.setState({ sidebar : !this.state.sidebar})}>collections</span>
  {this.state.sidebar && (
    <Slide left>
      <div className="sidebar-box-width800">
      <SidebarMenu close={() => this.setState({sidebar : false})} products={this.state.products} />
    </div>
    </Slide>
    )}
      <div className="mainBox">
        <div className="sidebar-box">
          <Sidebar products={this.state.products} />
        </div>
        
        <div className="product-list-box">
     
          <h3 className="productListLabel">
            Products ({this.state.products.length})
        
          </h3>
          {this.state.error && (
            <h1 style={{ color: "red" }}>Sorry, there was an error</h1>
          )}
          <Fade right cascade spy={this.state.setAnimation}>
          <section className="productGrid">
            {this.state.filter == true
              ? this.state.products.map(product => (
                  <div className='hoverFrame'>
                    <div className="main-product-frame">
                      <Link to={`/shop/${product.id}`}>
                        <div
                          className="details-container"
                          onMouseEnter={() => this.handleHover(product.id)}
                          onMouseLeave={() => this.handleHoverLeave()}
                        >
                          <img
                            id="product-img"
                            src={product.picture_main}
                            alt="mian-product-image"
                          />
                          <span id="product-title">{product.product_name}</span>
                          <span id="product-price">${product.price}</span>
                          <div className={this.state.hoveringItem == product.id ? 'productDetailsHover' : 'productDetailsHidden'}>
                          <span>{product.roast}</span>
                          <span>{product.details}</span>
                          </div>
                        </div>
                      </Link>
                      <AddToCartButton product={product} />
                    </div>
                   
                  </div>
                  
                ))
              : this.context.products.map(product => (
                <div className='hoverFrame'>
                <div className="main-product-frame">
                  <Link to={`/shop/${product.id}`}>
                    <div
                      className="details-container"
                      onMouseEnter={() => this.handleHover(product.id)}
                      onMouseLeave={() => this.handleHoverLeave()}
                    >
                      <img
                        id="product-img"
                        src={product.picture_main}
                        alt="mian-product-image"
                      />
                      <span id="product-title">{product.product_name}</span>
                      <span id="product-price">${product.price}</span>
               
                      <div className={this.state.hoveringItem == product.id ? 'productDetailsHover' : 'productDetailsHidden'}>
                      <span>{product.roast}</span>
                      <span>{product.details}</span>
                      </div>
                     
                    </div>
                  </Link>
                  <AddToCartButton product={product} />
                </div>
              </div>
            ))}
          </section>
          </Fade>
        </div>
      </div>
      </React.Fragment>
    );
  }
}
