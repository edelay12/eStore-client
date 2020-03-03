import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ProductApiService from "../../services/product-api-service";
import ProductContext from "../../Contexts/ProductContext";
import "./mainSearch.css";

class MainSearch extends Component {
  static contextType = ProductContext;
  state = {
    show: false,
    results: []
  };
  handleProductChange = item => {
    ProductApiService.getProduct(item)
      .then(this.context.setProduct)
      .catch(err => console.log(err));
    this.props.history.push(`/shop/${item}`);
  };

  handleInput = e => {
    if (!e == "" || null) {
      let searchTerm = e;
      let results = this.props.products.filter(term => {
        return term.product_name
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase());
      });
      this.setState({ results: results, show: true });
    } else this.setState({ results: [], show: false });
  };

  render() {
    const { show } = this.state;
    return (
      <div className="mainSearchContainer">
        <input
          type="text"
          className="mainSearchInput"
          placeholder="Search from products"
          onChange={e => this.handleInput(e.target.value)}
        />
        {show && (
          <div className="mainSearchDropDown">
            <ul className="mainSearchList">
              {this.state.results.map(item => (
                <li
                  className="mainSearchItem"
                  onClick={() => this.handleProductChange(item.id)}
                >
                  <img className="mainSearchImg" src={item.picture_main} />
                  <span>{item.product_name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(MainSearch);
