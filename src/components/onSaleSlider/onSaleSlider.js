import React, { Component } from "react";
import ProductContext from "../../Contexts/ProductContext";
import ProductApiService from "../../services/product-api-service";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OnSaleSlider.css";
export default class OnSaleSlider extends Component {
  static contextType = ProductContext;

  state = {
    saleProducts: []
  };

  componentDidMount() {
    ProductApiService.getSaleProducts()
      .then(this.context.setSaleProducts)
      .catch(this.context.setError);
  }
  render() {
    var settings = {
      dots: false,
      arrows: true,
      autoplay: true,
      rows: 1,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <h1 id="onSaleBanner">Trending Items</h1>
        <div className="onSaleContainer">
          <Slider {...settings}>
            {this.context.saleProducts.map(product => (
              <Link to={`/shop/${product.id}`}>
                <div className="onSaleSlideContainer">
                  <img
                    className="onSaleSlideImage"
                    src={product.picture_main}
                  />
                  <h6 className="onSaleName">{product.product_name}</h6>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </React.Fragment>
    );
  }
}
