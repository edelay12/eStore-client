import React, {useContext} from 'react';
import ProductContext from '../../contexts/productContext'

export default function Categories() {
const context = useContext(ProductContext)
return(
<React.Fragment>
<h1 className='categoriesBanner'>Shop by Category</h1>
<div className='categoriesContainer'>
{context.categories.map(item => 
<div className='item-container'>
    <img src='' />
    <span id='category-item-label'>{}</span>
</div>
)}
</div>
</React.Fragment>
)
}