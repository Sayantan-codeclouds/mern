const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require("./models/category");
const Product = require("./models/product");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Sample Categories
const categories = [
  { category_id: 1, name: "Laptops", description: "" },
  { category_id: 2, name: "Mobiles", description: "" },
  { category_id: 3, name: "Tablets", description: "" },
  { category_id: 4, name: "Accessories", description: "" },
];

// Sample Products
const products = [
  {
    product_id: 101,
    name: "Lenovo Yoga Book 9",
    description:
      "13th Gen Intel Evo Core i7 Dual 13.3″ 2.8K OLED Display(2x33.7cm) with Pen+Keyboard|16GB/1TB SSD/Win 11/Office 2021/5.0MP IR Camera/360° B&W Rotating Soundbar/Teal/1.34Kg,82YQ001DIN",
    price: 1000,
    image: "https://m.media-amazon.com/images/I/811tLMTCl+L._SX679_.jpg",
    category: 1,
  },
  {
    product_id: 102,
    name: "Apple 2024 MacBook Air",
    description:
      "13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Space Grey",
    price: 1000,
    image: "https://m.media-amazon.com/images/I/71ItMeqpN3L._SX679_.jpg",
    category: 1,
  },
  {
    product_id: 103,
    name: "Samsung Galaxy A35 5G",
    description:
      "The latest Samsung Galaxy A35 5G sAMOLED display provides immersive viewing experience with peak brightness upto 500 nits. 5000mAh battery gives you power to use your smartphone upto 2 days without worrying about frequent charging. And, you get up to 4 generations of Android Upgrades with 5 years of security updates that provides you the best OS experience available for the next 4 years with Samsung One UI. Powered by Samsung Exynos 1380 & upto 16GB RAM with RAM Plus, you can easily multi-task and play games with ease. Brilliant 50MP Triple Camera with 13MP Selfie Camera, lets you capture memories beautifully which you can share with your friends & family. Samsung loved features like Nightography, Quick Share, Samsung Wallet, Smart Hotspot, Knox Security & more boosts your productivity & smartphone experience.",
    price: 700,
    image: "https://m.media-amazon.com/images/I/51UfNPV4YPL.jpg",
    category: 2,
  },
  {
    product_id: 104,
    name: "Apple iPhone 15 Pro Max",
    description: "6.75″ - (256 GB) - Blue Titanium 6.75″",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/81fxjeu8fdL._SX679_.jpg",
    category: 2,
  },
  {
    product_id: 105,
    name: "Apple iPad Pro 11″ (M4)",
    description:
      "Ultra Retina XDR display, 256GB, Landscape 12MP front camera / 12MP back camera, LiDAR Scanner, Wi-Fi 6E, Face ID, all-day battery life, Standard Glass — Space Black",
    price: 1200,
    image: "https://m.media-amazon.com/images/I/714-7INRdwL._SL1500_.jpg",
    category: 3,
  },
];

const insertData = async () => {
  try {
    // Insert Categories
    const insertedCategories = await Category.insertMany(categories);
    console.log("Categories inserted:", insertedCategories);

    // Insert Products
    const insertedProducts = await Product.insertMany(products);
    console.log("Products inserted:", insertedProducts);

    // Disconnect from the database
    mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting data:", error);
    mongoose.disconnect();
  }
};

insertData();
