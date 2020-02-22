import React from 'react';
import './sidebar.css'
export default function Sidebar(props) {
    return (
        <React.Fragment>
            <h2 className='collectionLabel'>Collections</h2>
        <section className='sidebar'>
            <div>
        <button className='sidebarButton' name='all' onClick={props.filter} value='hot'>All Brew</button>
        </div>
        <div className='sidebar-temp'>
        <h3>Temperature Brew</h3>
        <button  className='sidebarButton' name='collection' onClick={props.filter} value='hot'>Hot</button>
        <button className='sidebarButton' name='collection' onClick={props.filter} value='cold'>Cold</button>
        </div>
        <div className='origin'>
        <h3>Origins</h3>
            { /* get list of origins*/}
        <button className='sidebarButton' name='origin' onClick={props.filter} value='USA'>USA</button>
        <button className='sidebarButton' name='origin' onClick={props.filter} value='colombia'>Colombia</button>
        </div>
        <div className='Roast'>
            <h3>Roast Levels</h3>
        <button className='sidebarButton' name='roast' onClick={props.filter} value='light'>Light</button>
        <button className='sidebarButton' name='roast' onClick={props.filter} value='medium'>Medium</button>
        <button className='sidebarButton' name='roast' onClick={props.filter} value='dark'>Dark</button>
        </div>
        </section>
        </React.Fragment>
    )
}