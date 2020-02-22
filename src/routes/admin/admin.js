import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminApiService from "../../services/admin-api-service";
import AdminDash from '../../components/adminDash/adminDash'
import "./admin.css";
import AddProductForm from "../../components/addProductForm/addProductForm";

export default class Admin extends Component {
  state = {
    products: [],
    results: [],
    product: [],
    addForm: false
  };

  componentDidMount() {
   AdminApiService.getProducts()
    .then(products =>
      this.setState({ results: products, products: products , product : products[0]})
    )
    .catch(err => console.log(err));
  }

  handleProduct = p => {
      this.setState({product : p, addForm : false})
      console.log(p)
  }

  refreshProducts = (products) => {
      this.setState({ products : products, addForm: false, product : products[0]})
      window.location.href = '/admin/1';
  } 

  handleSearch = e => {
    let searchTerm = e;
    let results = this.state.products.filter(term => {
      return term.product_name
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase());
    });
    this.setState({ results: results });
  };

  render() {
    return (
      <section className="adminPage">
        <section className="adminList">
            <div className='adminSearch'>
          <input
            className="adminProductSearch"
            type="text"
            placeholder="Search for a product"
            onChange={e => this.handleSearch(e.target.value)}
          />
          <button className='addProductButton' onClick={() => this.setState({addForm: true})}>Add a product</button>
          </div>
          
          <ul className="adminProductList">
            {this.state.results.map(product => (
              <NavLink to={`/admin/${product.id}`}>
                <Item click={this.handleProduct} product={product} />
              </NavLink>
            ))}
          </ul>
        </section>
        <section className="adminDash">
            {this.state.addForm === true ? <AddProductForm refreshProducts={this.refreshProducts} /> :  <AdminDash refreshProducts={this.refreshProducts} product={this.state.product}/> }
        </section>
      </section>
    );
  }
}

function Item({ product , click }) {
  return (
    <li className="productListItem" onClick={() => click(product)}>
      <img className="adminProductImg" src={product.picture_main} alt="" />
      { /*<span>{product.id}</span> */}
      <span>{product.product_name}</span>
    </li>
  );
}
