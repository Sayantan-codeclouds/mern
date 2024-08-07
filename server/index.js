const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes"); // Add this line
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
// List of allowed origins (add your frontend URL here without trailing slash)
const allowedOrigins = [
  "https://mern-front-9oss.onrender.com/",
  "http://localhost:5175/",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(cors());

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Routes
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("API is running...");
});
app.use("/api/users", userRoutes);
// Add this line
app.use("/api", productRoutes);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
