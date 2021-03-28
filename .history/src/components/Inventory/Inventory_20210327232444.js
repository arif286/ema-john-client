import React from 'react';
import fakeData from '../../fakeData';


const Inventory = () => {
    const handleAddProduct = () => {
        fetch("http://localhost:5000/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(fakeData[0])
        });
    }
    return (
        <div>
            <h1>Inventory coming soon...</h1>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;