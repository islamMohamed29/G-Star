import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from "../json/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.filter(product => product.id === id);
    setProduct(foundProduct);
    console.log(id,'id')
    console.log(foundProduct,'foundProduct')
  }, [id]);

  return (
    <div>
    {product ? (
      <div>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.category}</p>
      </div>
    ) : (
      <p>Product not found</p>
    )}
  </div>
  );
}
