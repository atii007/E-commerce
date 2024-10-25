require("newrelic");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const Port = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

const Users = mongoose.model("Users", {
  name: String,
  email: { type: String, unique: true },
  password: String,
  cartData: Object,
  role: String,
  date: { type: Date, default: Date.now },
});

// Storage setup for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./upload/images"),
  filename: (req, file, cb) =>
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    ),
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));

app.get("/", (req, res) => res.send("Express app running"));

// Middleware to verify JWT
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ errors: "Please Authenticate" });

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ errors: "Invalid token" });
  }
};

// User signup route
app.post("/signup", async (req, res) => {
  const { username, email, password, role } = req.body;
  const existingUser = await Users.findOne({ email });

  if (existingUser)
    return res
      .status(400)
      .json({ success: false, errors: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const cart = Array.from({ length: 300 }, () => 0).reduce(
    (acc, _, i) => ({ ...acc, [i]: 0 }),
    {}
  );
  const user = new Users({
    name: username,
    email,
    password: hashedPassword,
    cartData: cart,
    role,
  });

  await user.save();
  const accessToken = jwt.sign({ user: { id: user.id } }, JWT_SECRET, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign({ user: { id: user.id } }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    success: true,
    accessToken,
    refreshToken,
    newUser: { id: user.id, role },
  });
});

// User login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

  if (!user)
    return res.status(400).json({
      success: false,
      errors: "No account registered with this email",
    });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ success: false, errors: "Invalid password" });

  const accessToken = jwt.sign({ user: { id: user.id } }, JWT_SECRET, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign({ user: { id: user.id } }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    success: true,
    accessToken,
    refreshToken,
    newUser: { id: user.id, role: user.role },
  });
});

// Refresh token route
app.post("/refresh-token", fetchUser, (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return res.status(401).json({ error: "No refresh token provided" });

  jwt.verify(refreshToken, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid refresh token" });

    const accessToken = jwt.sign({ user: { id: user.id } }, JWT_SECRET, {
      expiresIn: "30m",
    });
    res.json({ accessToken });
  });
});

// Product routes
app.post("/addproduct", async (req, res) => {
  const { name, category, new_price, old_price, image } = req.body;
  const products = await Product.find({});
  const id = products.length ? products.slice(-1)[0].id + 1 : 1;

  const product = new Product({
    id,
    name,
    category,
    new_price,
    old_price,
    image,
  });
  await product.save();

  res.json({ success: true, name });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true });
});

app.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// New collections
app.get("/newcollections", async (req, res) => {
  const products = await Product.find({}).limit(6).skip(1);
  res.json(products);
});

// Popular in women category
app.get("/popularinwomen", async (req, res) => {
  const products = await Product.find({ category: "women" }).limit(3);
  res.json(products);
});

// Cart routes
app.post("/addtocart", fetchUser, async (req, res) => {
  const user = await Users.findById(req.user.id);
  user.cartData[req.body.itemId] = (user.cartData[req.body.itemId] || 0) + 1;

  await user.save();
  res.json({ message: "Added" });
});

app.post("/removefromcart", fetchUser, async (req, res) => {
  const user = await Users.findById(req.user.id);
  user.cartData[req.body.itemId] = Math.max(
    (user.cartData[req.body.itemId] || 1) - 1,
    0
  );

  await user.save();
  res.json({ message: "Removed" });
});

app.post("/getcart", fetchUser, async (req, res) => {
  const user = await Users.findById(req.user.id);
  res.json(user.cartData);
});

app.listen(Port, () => console.log(`Server running on port ${Port}`));
