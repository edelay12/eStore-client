import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../Contexts/ProductContext";
import Carousel from "../../components/MainSlider/slider";
import ShopSeason from "../../components/CategoryButtons/CategoryButtons";
import Footer from "../../components/Footer/Footer";
import OnSaleSlider from "../../components/OnSaleSlider/OnSaleSlider";
import deathwishFeature from "./deathwishFeature.png";
import Fade from "react-reveal/Slide";
import "./shop.css";

export default class Shop extends Component {
  static contextType = ProductContext;

  state = {
    mens: []
  };

  render() {
    return (
      <React.Fragment>
        <div className="shopMain">
          <Carousel />
          <section className="seasonContainer">
            <ShopSeason collection="hot" />
            <ShopSeason collection="cold" />
          </section>
          <section className="featureContainer">
            <Link to={"/shop/collections/featured"}>
              <Fade bottom cascade>
                <img id="shopFeature_deathwish" src={deathwishFeature} />
              </Fade>
            </Link>
          </section>
          <section className="saleFeaturedContainer">
            <div>
              <h3>What makes us different? </h3>
            </div>
          </section>
          <section className="onSaleContainer"></section>
        </div>
        <section className="footer">
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
