import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError]= useState('')
    const handleProductMenege = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;


        if(name.length ===0){
            setError('enter product name')
        }
        else if(price.length===0  ){
            setError('enter your valid price')
        }
        else{
            setError(' ')
        }


        console.log(name, price, quantity);
        const newProduct = {
            name,price,quantity
            
        }
      if(!error){
        handleAddProduct(newProduct)
      }
    }

   
    return (
        <div>
            <h1>Product menege system</h1>
               <form onSubmit={handleProductMenege}>
                <input type="text " name='name' placeholder='Product Name' /> <br />
                <input type="text " name='price' placeholder='Product price' /> <br />
                <input type="text " name='quantity' placeholder='Product quantity' /> <br />
                <input type="submit" value="Submit" />
            </form>
            <h2>
                <smol>{error}</smol>
            </h2>
        </div>
    );
};

export default ProductForm;