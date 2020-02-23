import React from 'react';
import { Link , withRouter } from 'react-router-dom';
import './sidebar.css'

function Sidebar(props) {

const queParams = (collection , value ) => {
    console.log(collection)
    console.log(value)
    props.history.replace(`/shop/collections/${collection.toLowerCase()}/${value.toLowerCase()}`, )
}
    return (
        <React.Fragment>
            <h2 className='collectionLabel'>Collections</h2>
        <section className='sidebar'>
            <div>
         <button className='sidebarButton' name='all'><Link to={'/shop/collections'}>All Brew</Link></button>
        </div>
        <div>
        <button className='sidebarButton' name='all' value='hot'><Link to={'/shop/collections/sale'}>Sale</Link></button>
        <button className='sidebarButton' name='all' value='hot'><Link to={'/shop/collections/featured'}>Featured</Link></button>
        </div>
        <div className='sidebar-temp'>
        <h3>Temperature Brew</h3>
        <button  className='sidebarButton' name='collection' onClick={() => queParams('temp', 'hot')} value='hot'>Hot</button>
        <button className='sidebarButton' name='collection' onClick={() => queParams('temp', 'cold')} value='cold'>Cold</button>
        </div>
        <div className='origin'>
        <h3>Origins</h3>
            { /* get list of origins ********************************************** */}
        <button className='sidebarButton' name='origin' onClick={() => queParams('origin', 'USA')} value='USA'>USA</button>
        <button className='sidebarButton' name='origin' onClick={() => queParams('origin', 'colombia')} value='colombia'>Colombia</button>
        </div>
        <div className='Roast'>
            <h3>Roast Levels</h3>
        <button className='sidebarButton' name='roast' onClick={() => queParams('roast', 'light')} value='light'>Light</button>
        <button className='sidebarButton' name='roast' onClick={() => queParams('roast', 'medium')} value='medium'>Medium</button>
        <button className='sidebarButton' name='roast' onClick={() => queParams('roast', 'dark')} value='dark'>Dark</button>
        </div>
        </section>
        </React.Fragment>
    )
}

export default withRouter(Sidebar)