// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import NavBar from "./components/NavBar"; // Your NavBar component if available

import "./index.css"; // Import global styles if any

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <Router>
      <NavBar /> {/* Optional: Add your navigation bar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:product_id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.getElementById("root"));
