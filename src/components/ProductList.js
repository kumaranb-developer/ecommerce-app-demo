import React from 'react';

const products = [
  { id: 1, name: 'Product A', price: '$25' },
  { id: 2, name: 'Product B', price: '$40' },
  { id: 3, name: 'Product C', price: '$30' },
];

const ProductList = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
      {products.map((item) => (
        <div key={item.id} style={{border: '1px solid gray', padding: '10px', width: '150px'}}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
