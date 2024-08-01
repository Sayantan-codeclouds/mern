const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: Number, required: true }, // Reference to Category model
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
