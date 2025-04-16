import React from 'react';

const ProductTable = ({product}) => {
    // console.log(product);
    return (
        <div>
            <h3>products : {product.length}</h3>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
         
                      {
                        product.map((produc,index)=><tr key={index}>
                            <td>{index}</td>
                            <td>{produc.name}</td>
                            <td>{produc.price}</td>
                            <td>{produc.quantity}</td>
                        </tr>)
                      }
                   
                </tbody>
                
            </table>
            
        </div>
    );
};

export default ProductTable