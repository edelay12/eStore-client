import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./CategoryButtons.css";

export default class ShopSeason extends Component {
  renderColdCollection() {
    return (
      <Fade up cascade>
        <div className="itemContainer">
          <Link to="/shop/collections/temp/cold">
            <img
              className="background"
              src="https://images.unsplash.com/photo-1562878424-0da674456d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            />
            <h1 className="banner">Cold Brew</h1>
          </Link>
        </div>
      </Fade>
    );
  }

  renderHotCollection() {
    return (
      <Fade up cascade>
        <div className="itemContainer">
          <Link to="/shop/collections/temp/hot">
            <img
              className="background"
              src="https://images.unsplash.com/photo-1553110581-3f0c7e7e955f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80"
            />
            <h1 className="banner">Hot Brew</h1>
          </Link>
        </div>
      </Fade>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.collection == "hot"
          ? this.renderHotCollection()
          : this.renderColdCollection()}
      </React.Fragment>
    );
  }
}
