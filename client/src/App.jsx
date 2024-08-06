// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/Product";
import Checkout from "./pages/Checkout"; // Import your Checkout page
import NavBar from "./components/NavBar"; // Your NavBar component
import { CartProvider } from "./context/CartContext"; // Import the CartProvider

import "./index.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar /> {/* Optional: Add your navigation bar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:product_id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />{" "}
          {/* Add Checkout route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
