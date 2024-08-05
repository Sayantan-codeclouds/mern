// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";
const apiUrl = import.meta.env.VITE_API_URL;

const ProductDetails = () => {
  const { product_id } = useParams(); // Retrieve product ID from URL
  console.log("Product ID from URL:", product_id); // Debugging line
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/products/${product_id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product_id]);

  const handleBuyNow = () => {
    // Implement Buy Now functionality
    alert("Buy Now functionality not yet implemented");
  };

  const handleAddToCart = () => {
    // Implement Add to Cart functionality
    alert("Add to Cart functionality not yet implemented");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-details-container">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-category">Category: {product.category.name}</p>
          <div className="product-buttons">
            <button className="buy-now-button" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
