import React, { Component } from 'react'

export const nullProduct = {
  picture_main: '',
  product_roast: '',
  product_name: '',
  details: '',
  price: ''
}

const ProductContext = React.createContext({
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setProducts: () => {},
  setSaleProducts: () => {},
  setProduct: () => {},
  clearProduct: () => {},
  addProduct: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default ProductContext;


export class ProductsProvider extends Component {
  state = {
    products: [],
    categories: [{ name :'Tees' , img : ''},
    { name :'Pants' , img : ''},
    { name :'Long-sleeve' , img : ''},
    { name :'Tees' , img : ''},
    { name :'Tees' , img : ''},
     'Pants','long-sleeve', 'Shorts', 'Coat/Jacket', 'Shoes'],
    product: nullProduct,
    saleProducts: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setProducts = products => {
    this.setState({ products })
  }

  setSaleProducts = saleProducts => {
    this.setState({ saleProducts })
  }

  setProduct = product => {
    this.setState({ product })
  }
  clearProduct = () => {
    this.setProduct(nullProduct)
   // this.setComments([])
  }
  addProduct = product => {
    this.setProducts([...this.state.products, product]);
  }

  /*
  setComments = comments => {
    this.setState({ comments })
  }

  clearArticle = () => {
    this.setArticle(nullArticle)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }
*/
render() {
  const value = {
    products: this.state.products,
    product: this.state.product,
    categories: this.state.categories,
    saleProducts: this.state.saleProducts,
    setProducts: this.setProducts,
    setSaleProducts: this.setSaleProducts,
    addProduct: this.addProduct,
    comments: this.state.comments,
    error: this.state.error,
    setError: this.setError,
    clearError: this.clearError,
    setProduct: this.setProduct,
    setComments: this.setComments,
    clearProduct: this.clearProduct,
    addComment: this.addComment,
  }
  return (
    <ProductContext.Provider value={value}>
      {this.props.children}
    </ProductContext.Provider>
  )
}
}
