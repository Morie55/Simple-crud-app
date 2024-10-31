const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controllers.js");

// Define the route to get all products
router.get("/", getProducts);

// Define the route to get a product by ID
router.get("/:id", getProduct);

// Define the route to create a new product
router.post("/", createProduct);

// Define the route to update a product by ID
router.put("/:id", updateProduct);

// Define the route to delete a product by ID
router.delete("/:id", deleteProduct);

// Export the router to use in other parts of the application
module.exports = router;
