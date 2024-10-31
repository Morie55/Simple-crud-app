// Import required modules
const express = require("express"); // Express for building server and handling requests
const mongoose = require("mongoose"); // Mongoose for connecting and interacting with MongoDB
const Product = require("./models/product.model.js"); // Product model for MongoDB operations
const productRoute = require("./routes/product.route.js"); // Product routes for handling product API requests

// Initialize the Express application
const app = express();

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data from forms

// Define routes
app.use("/api/products", productRoute); // Use product routes for /api/products endpoint

// Root route to verify server is working
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated"); // Send response to client
});

// Connect to MongoDB database
mongoose
  .connect(
    "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority" // Connection string for MongoDB
  )
  .then(() => {
    console.log("Connected to database!"); // Log success message on successful connection

    // Start server and listen on port 3000
    app.listen(3000, () => {
      console.log("Server is running on port 3000"); // Log server running status
    });
  })
  .catch(() => {
    console.log("Connection failed!"); // Log failure message if connection fails
  });
