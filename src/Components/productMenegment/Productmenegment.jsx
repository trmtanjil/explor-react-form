import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';


const Productmenegment = () => {

    const [product,setProduct]= useState([]);

    const handleAddProduct=newProducthandle=>{
        const newProduct = [...product, newProducthandle];
        setProduct(newProduct)
    }

    return (
        <div>
        <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default Productmenegment;