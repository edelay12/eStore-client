import React, { Component } from 'react';
import AdminService from '../../services/admin-api-service';
import ProductContext from '../../contexts/productContext'
export default class AdminDash extends Component {

  state = {
    img : { value : this.props.product.picture_main, error: false },
    defaultImg : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI',
    sale : false,
    edit: false
  }



  checkSale =(e) => {
    console.log(e.currentTarget.value)
    e.currentTarget.value = 'True' ? this.setState({sale : true}) : this.setState({sale : false});
 }
 
 checkFeatured = (e) => {
     e.target.value == 'True' ? this.setState({featured : true}) : this.setState({featured : false}) 
 }
 checkCollection = (e) => {
     e.target.value == 'hot' ? this.setState({collection : 'hot'}) : this.setState({collection : 'cold'})
 }
 
 checkImg = (e) => {
     e.currentTarget.value.startsWith('https://') ? this.setState({img : {src : e.currentTarget.value}}) : this.setState({img : {error : true}})
 }

 deleteItem = (id) => {
   console.log(id)
  AdminService.deleteProduct(id)
  .then(alert(`item ${id} deleted`))
  .then(() => {
    AdminService.getProducts()
    .then(res => this.props.refreshProducts(res))
})
.catch(err => console.log(err))
 }

 editItem = () => {
  this.setState({
    img : { value : this.props.product.picture_main, error: false },
    defaultImg : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI',
    product_name :  { value :  this.props.product.product_name, error: false },
    product_roast :  { value : this.props.product.product_roast, error: false },

    price:  { value :  this.props.product.price, error: false },
    details :  { value : this.props.product.details, error: false },
    origin :    { value : this.props.product.origin, error: false },

    collection :   this.props.product.collection,
    sale :  this.props.product.sale,
    onSaleS : { value: this.props.product.sale_price, error: false},
   //salePrice:  { value :   this.props.product.salePrice, error: false },
    featured :  this.props.product.featured,
    id: this.props.product.id,
    edit: true,
  });
 }
  handleSubmit = (e) => {
    e.preventDefault();
    let state = this.state
console.log('ran')
    //validate fields
    if (state.product_name.value == null || ''  && !state.product_name.value.startsWith(' ')){
        state.product_name.error = true;
        return this.setState({state});
    } else if (state.product_roast.value == null || ''  && !state.product_roast.value.startsWith(' ')){
        state.product_roast.error = true;
        return this.setState({state});
    } else if (state.price.value == null || ''  && !state.price.value.startsWith(' ')){
        state.price.error = true;
        return this.setState({state});
    } else if (state.details.value == null || ''  && !state.details.value.startsWith(' ')){
        state.details.error = true;
        return this.setState({state});
    } else if(state.origin.value == null || ''  && !state.origin.value.startsWith(' ')){
        state.origin.error = true;
        return this.setState({state});
    } else if(state.sale == true) {
        if(state.onSaleS.value == null || ''  && !state.onSaleO.value.startsWith(' ')){
                state.onSaleS.error = true;
                return this.setState({state});
        }
    }
    
    const newProduct = {
        picture_main : this.state.img.value == null || '' ? this.state.defaultImg : this.state.img.value,
        product_name : this.state.product_name.value,
        product_roast : this.state.product_roast.value,
        price : this.state.price.value,
        details : this.state.details.value,
        origin : this.state.origin.value,
        collection : this.state.collection,
        sale : this.state.sale , 
        salePrice : this.state.onSaleS.value,
        featured : this.state.featured
    } 
  
    console.log(newProduct)
    const id = this.state.id;
    AdminService.updateProduct(newProduct, id)
    .then(res => console.log(res))
    .then(() => {
      AdminService.getProducts()
      .then(res => this.props.refreshProducts(res))
  })
    .catch(err => console.log(err));
}


renderCurrentProduct(){
  const  product = this.props.product
  return (
  <section className='currentProduct'>
  <h3>Current Product Display</h3>
  <hr />
  <img id="itemImg" src={product.picture_main} />
  <h3>Image URL: {product.picture_main}</h3>
  <h1 id="itemName">Product Name: {product.product_name}</h1>
  <h3 id="itemRoast">Roast: {product.product_roast}</h3>
  <h3 id="itemDetails">Details: {product.details}</h3>
  <h3 id="itemPrice">Price: {product.price}</h3>
  <h3 id="itemPrice">Origin: {product.origin}</h3>
  <h3 id="itemPrice">Collection: {product.collection}</h3>
  <h3 id="itemPrice">Item on sale: {product.sale == true ? 'true' : 'false'}</h3>
  <h3 id="itemPrice">Item Featured: {product.featured == true ? 'true' : 'false'}</h3>
  <button id='editProductButton' onClick={this.editItem}>Edit product</button>
  <button id='deleteProductButton' onClick={() => this.deleteItem(product.id)}>Delete product</button>
</section>
  )
}

renderEditProduct(){
console.log(this.state)
return (
  <section className='newDetails'>
            <h1>Edit Item Details</h1>
            <button onClick={() => this.setState({edit : false})}>Cancel</button>
          <form className='newProductForm' onSubmit={this.handleSubmit}>
          <img id='itemImage' src={ this.state.img.value || this.props.product.picture_main} />
                  {this.state.img.error == true && <h5 style={{color : 'red'}}>Please include image link that starts with 'https'</h5>}
                <div>
                <label for='imgInput'>Image link (Leave untouched for current image): </label>
                <input type='text' id='imgInput' defaultValue={this.state.img.value} onChange={this.checkImg}/>
                </div>

                {this.state.product_name.error == true && <h5 style={{color : 'red'}}>Please include a valid name</h5>}
                <div>                
                <label for='nameInput'>Product Name: </label>
                <input type='text' id='nameInput' defaultValue={this.state.product_name.value} onChange={(e) => this.setState({product_name: {value : e.currentTarget.value, error: false}})} />
                </div>

                {this.state.product_roast.error == true && <h5 style={{color : 'red'}}>Please include a valid roast (light, medium, dark)</h5>}
                <div>
                <label for='roastInput'>Roast level (light, medium, dark): </label>
                <input type='text' id='roastInput'  defaultValue={this.state.product_roast.value} onChange={(e) => this.setState({product_roast : {value : e.currentTarget.value, error: false}})} />
                </div>
            
                {this.state.price.error == true && <h5 style={{color : 'red'}}>Please include a valid price </h5>}
                <div>
                <label for='priceInput'>Price: </label>
                <input type='number' id='priceInput'  defaultValue={this.state.price.value} onChange={(e) => this.setState({price : {value : e.currentTarget.value, error: false}})} />
                </div>

                {this.state.details.error == true && <h5 style={{color : 'red'}}>Please include a valid product details</h5>}
                <div>
                <label for='detailsInput'>Product details: </label>
                <input type='text' id='detailsInput'  defaultValue={this.state.details.value} onChange={(e) => this.setState({details : {value : e.currentTarget.value, error: false}})} />
                </div>

                {this.state.origin.error == true && <h5 style={{color : 'red'}}>Please include a valid origin</h5>}
                <div>
                <label for='originInput'>Product origin: </label>
                <input type='text' id='originInput' defaultValue={this.state.origin.value} onChange={(e) => this.setState({origin : {value : e.currentTarget.value, error: false}})} />
                </div>


                <label for='nameInput'>Collection (Cold brew / Hot brew): </label>
                <div>
                <input type='radio' id='collectionInput' name='collectionInput' value='hot' defaultChecked onChange={this.checkCollection}/> <label for='collectionInputHot'> Hot</label>
                </div>
                <div>
                <input type='radio' id='collectionInput' name='collectionInput' value='cold' onChange={this.checkCollection}/> <label for='collectionInputCold'> Cold</label>
                </div>

                <label for='nameInput'>Product on sale?: </label>
                <div>
                 <input type='radio' id='saleInput' name='saleInput' value='True' onChange={this.checkSale}/>
                 <label for='saleInputTrue'> True</label>
                 </div>
                 <div>
                <input type='radio' id='saleInput' name='saleInput' value='False' onChange={this.checkSale} defaultChecked />
                <label for='saleInputFalse'> False</label>
                </div>

                
                {this.state.onSaleS.error == true && <h5 style={{color : 'red'}}>Please include a valid sale price</h5>}
            {this.state.sale == false ? null : (
                <section>
                 <label for='saleInput'>On salse price: </label>
                 <input type='number' id='SsalePriceInput' defaultValue={this.state.onSaleS.value} onChange={(e) => this.setState({onSaleS : {value : e.currentTarget.value, error: false}})} />  
                 </section>
            )}

                <label for='featuredInput'>Product to be featured?: </label>
                <div>
                <input type='radio' id='featuredInput' name='feautredInput' value='True' onChange={this.checkFeatured} />
                <label for='featuredInput'> True</label>
                </div>
                <div>
                <input type='radio' id='featuredInput' name='feautredInput' value='False' defaultChecked onChange={this.checkFeatured} />
                <label for='featuredInput'> False</label>
                </div>

                <button type='submit' className='updateProductButton'>Update product</button>
            </form>
            </section>
)
}

    render(){

    return (
  <section className='adminProductContainer'>
    {this.state.edit == false ? this.renderCurrentProduct() : this.renderEditProduct() }
  </section>
        )
    }
}
