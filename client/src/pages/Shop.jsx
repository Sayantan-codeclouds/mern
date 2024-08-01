// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Shop.css";
import { truncateText } from "../utils/utils";

const apiUrl = import.meta.env.VITE_API_URL;

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}api/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.product_id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">
              {truncateText(product.description, 100)}
            </p>
            <p className="product-price">${product.price}</p>
            <Link
              to={`/product/${product.productproduct_id}`}
              className="view-details-button"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
