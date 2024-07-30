const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const users = [
  { name: "John Doe", email: "john@example.com", password: "123456" },
  { name: "Jane Smith", email: "jane@example.com", password: "123456" },
  { name: "Alice Johnson", email: "alice@example.com", password: "123456" },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await User.deleteMany({});
    await User.insertMany(users);
    console.log("Sample data inserted");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
