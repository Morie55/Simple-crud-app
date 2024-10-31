// Import the Product model to interact with the Product collection in the database
const Product = require("../models/product.model");

// Controller to create a new product
const getProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body); // Create a new product with data from request body
    res.status(200).json(product); // Send the created product as a response with a 200 status
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send a 500 error if an exception occurs
  }
};

// Controller to retrieve a single product by ID
const getProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from route parameters
    const products = await Product.findById(id); // Find product by ID in the database
    return res.status(200).json(products); // Send the found product as a response with a 200 status
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send a 500 error if an exception occurs
  }
};

// Controller to create and save a new product in the database
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // Create a new product with data from request body
    res.status(200).json(product); // Send the created product as a response with a 200 status
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send a 500 error if an exception occurs
  }
};

// Controller to update an existing product by ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from route parameters
    const product = await Product.findByIdAndUpdate(id, req.body); // Find and update product with new data

    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // Send 404 if product not found
    }

    const UpdatedProduct = await Product.findById(id); // Retrieve updated product for confirmation
    res.status(200).json(UpdatedProduct); // Send updated product as response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send a 500 error if an exception occurs
  }
};

// Controller to delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from route parameters
    const product = await Product.findByIdAndDelete(id); // Find and delete the product by ID

    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // Send 404 if product not found
    }

    res.status(200).json({ message: "Product deleted successfully" }); // Send success message with 200 status
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send a 500 error if an exception occurs
  }
};

// Export all controller functions for use in routes
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
