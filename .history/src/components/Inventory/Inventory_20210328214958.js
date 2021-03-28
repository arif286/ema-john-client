import React from 'react';


const Inventory = () => {
    const product = {};
    const handleAddProduct = () => {
        fetch("https://thawing-tundra-00223.herokuapp.com/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(product)
        });
    }
    return (
      <div>
            <form action="">
                <p><span>Name</span> :<input type='text'/></p>
                <p><span>price</span><input type='text'/></p>
                <p><span>quantity</span><input type='text'/></p>
                <p><span>Product image</span><input type='file'/></p>

                <button onClick={handleAddProduct}>Add Product</button>
            </form>
      </div>
    );
};

export default Inventory;