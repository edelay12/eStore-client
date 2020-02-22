import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './addProductForm.css'
import AdminService from '../../services/admin-api-service';
import ProductContext from '../../contexts/productContext'

export default class AddProductForm extends Component {
    static contextType = ProductContext;

state ={
        defaultImg : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI',
        img: { value : null, error: false },
        product_name : { value: null, error: false},
        product_roast : { value: null, error: false},
        price: { value: null, error: false},
        details : { value: null, error: false},
        origin : { value: null, error: false},
        collection : 'hot' ,
        sale : false,
        onSaleS : { value: null, error: false},
        featured : false,
}

checkSale =(e) => {
   return e.currentTarget.value = 'True' ? this.setState({sale : true}) : this.setState({sale : false});
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


handleSubmit = (e) => {
    e.preventDefault();
    let state = this.state

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
    AdminService.createProduct(newProduct)
    .then(() => {
        AdminService.getProducts()
        .then(res => this.props.refreshProducts(res))
    })
    .catch(err => console.log(err));
}

    render(){
        return (
            <form className='addProductForm' onSubmit={this.handleSubmit}>
                  {this.state.img.error == true && <h5 style={{color : 'red'}}>Please include image link that starts with 'https'</h5>}
                <div>
                <label for='imgInput'>Image link (Leave blank for random product image): </label>
                <input type='text' id='imgInput' onChange={this.checkImg}/>
                </div>

                {this.state.product_name.error == true && <h5 style={{color : 'red'}}>Please include a valid name</h5>}
                <div>                
                <label for='nameInput'>Product Name: </label>
                <input type='text' id='nameInput' onChange={(e) => this.setState({product_name: {value : e.currentTarget.value, error: false}})} />
                </div>

                {this.state.product_roast.error == true && <h5 style={{color : 'red'}}>Please include a valid roast (light, medium, dark)</h5>}
                <div>
                <label for='roastInput'>Roast level (light, medium, dark): </label>
                <input type='text' id='roastInput' onChange={(e) => this.setState({product_roast : {value : e.currentTarget.value, error: false}})} />
                </div>
            
                {this.state.price.error == true && <h5 style={{color : 'red'}}>Please include a valid price </h5>}
                <div>
                <label for='priceInput'>Price: </label>
                <input type='number' id='priceInput' onChange={(e) => this.setState({price : {value : e.currentTarget.value, error: false}})} />
                </div>

                {this.state.details.error == true && <h5 style={{color : 'red'}}>Please include a valid product details</h5>}
                <div>
                <label for='detailsInput'>Product details: </label>
                <input type='text' id='detailsInput' onChange={(e) => this.setState({details : {value : e.currentTarget.value, error: false}})} />
                </div>

                {this.state.origin.error == true && <h5 style={{color : 'red'}}>Please include a valid origin</h5>}
                <div>
                <label for='originInput'>Product origin: </label>
                <input type='text' id='originInput' onChange={(e) => this.setState({origin : {value : e.currentTarget.value, error: false}})} />
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
            {this.state.sale == true && (
                <section>
                 <label for='nameInput'>On salse price: </label>
                 <input type='number' id='SsalePriceInput' onChange={(e) => this.setState({onSaleS : {value : e.currentTarget.value, error: false}})} />  
                 </section>
            )}
                            


                <label for='nameInput'>Product to be featured?: </label>
                <div>
                <input type='radio' id='featuredInput' name='featuredInput' value='True' onChange={this.checkFeatured} />
                <label for='featuredInputTrue'> True</label>
                </div>
                <div>
                <input type='radio' id='featuredInput' name='feautredInput' value='False' defaultChecked onChange={this.checkFeatured} />
                <label for='featuredInputFalse'> False</label>
                </div>

                <button type='submit' className='addProductButton'>Add product</button>
            </form>
        )
    }
}