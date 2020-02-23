import React, { Component } from "react";
import "./itemPage.css";
import ProductContext from "../../Contexts/ProductContext";
import ProductApiService from '../../services/product-api-service'
import { AddToCartButton } from "../../components/Utils/Utils";

export default class ItemPage extends Component {
    static defaultProps = {
        match: { params: {} },
      }

  static contextType = ProductContext;
state = {
    show : false,
}
  componentDidMount() {
    const { itemId } = this.props.match.params;
ProductApiService.getProduct(itemId)
.then(this.context.setProduct)
.catch(err => console.log( err))
.then(this.setState({show : true}))
//setError

//service get reviews
  }

  componentWillUnmount(){
      this.context.clearProduct();
  }
  
addToCart = (product) => {
    this.context.addToCart(product)

}
  render() {
 const  { product } = this.context

    return (
      <React.Fragment>
          <div>
            <img id="itemImg" src={product.picture_main} />
            <h1 id="itemName">{product.product_name}</h1>
            <h6 id="itemRoast">{product.product_roast}</h6>
            <h6 id="itemDetails">{product.details}</h6>
            <h1 id="itemPrice">{product.price}</h1>
          </div>
          <AddToCartButton product={product}/>
      </React.Fragment>
    );
  }
}
