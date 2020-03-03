import React, { Component } from "react";

export const nullProduct = {
  picture_main: "",
  product_roast: "",
  product_name: "",
  details: "",
  price: ""
};

const ProductContext = React.createContext({
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setProducts: () => {},
  setSaleProducts: () => {},
  setProduct: () => {},
  clearProduct: () => {},
  addProduct: () => {}
});

export default ProductContext;

export class ProductsProvider extends Component {
  state = {
    products: [],
    product: nullProduct,
    saleProducts: [],
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setProducts = products => {
    this.setState({ products });
  };

  setSaleProducts = saleProducts => {
    this.setState({ saleProducts });
  };

  setProduct = product => {
    this.setState({ product });
  };
  clearProduct = () => {
    this.setProduct(nullProduct);
  };
  addProduct = product => {
    this.setProducts([...this.state.products, product]);
  };

  render() {
    const value = {
      products: this.state.products,
      product: this.state.product,
      categories: this.state.categories,
      saleProducts: this.state.saleProducts,
      setProducts: this.setProducts,
      setSaleProducts: this.setSaleProducts,
      addProduct: this.addProduct,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProduct: this.setProduct,
      clearProduct: this.clearProduct
    };
    return (
      <ProductContext.Provider value={value}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
