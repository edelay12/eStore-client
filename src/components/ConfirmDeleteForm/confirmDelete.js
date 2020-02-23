import React from 'react';

export default function confirmDelete(){
    return (
        <div className='deleteWindow'>
            <h1>Are you sure you would like to delete this item</h1>
            <button>Yes</button>
            <button>No</button>
        </div>
    )
}