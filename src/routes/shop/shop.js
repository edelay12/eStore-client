import React, { Component } from "react";
import ProductApiService from "../../services/product-api-service";
import ProductContext from "../../contexts/productContext";
import Carousel from "../../components/slider/slider";
import ShopSeason from "../../components/shopSeason/shopSeason";
import OnSaleSlider from "../../components/onSaleSlider/onSaleSlider";
import "./shop.css";

export default class Shop extends Component {
  static contextType = ProductContext;

  state = {
    mens: []
  };

  render() {
    return (
      <React.Fragment>
        <Carousel />
      
        <section className="seasonContainer">
          <ShopSeason collection="hot" />
          <ShopSeason collection="cold" />
        </section>

        <section className="onSaleContainer">
          <OnSaleSlider />
        </section>
        <section className="onSaleContainer">
          {/* trending */}
         
        </section>
        <section className='featureContainer'>
          {/* deathwish feature */}
        </section>
      </React.Fragment>
    );
  }
}
