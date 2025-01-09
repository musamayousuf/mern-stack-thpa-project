const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Database connection
require("./db/conn");

// Import User model
const User = require("./model/userSchema");

// Import auth routes
app.use(require("./router/auth"));

const PORT = process.env.PORT || 5000;

// Custom middleware
const middleware = (req, res, next) => {
  console.log("Hello Middleware ad");
  next(); // Pass control to the next middleware or route
};

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello About");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact");
});

app.get("/signin", (req, res) => {
  res.send("Hello Signin");
});

app.get("/signup", (req, res) => {
  res.send("Hello Signup");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
