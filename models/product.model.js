// Import Mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Define the schema for a Product model
const ProductSchema = mongoose.Schema(
  {
    // Define the 'name' field, which is a required string
    name: {
      type: String, // Data type for name is String
      required: [true, "Please enter product name"], // Required with custom error message
    },

    // Define the 'quantity' field, which is a required number with a default value of 0
    quantity: {
      type: Number, // Data type for quantity is Number
      required: true, // Field is required
      default: 0, // Default value is set to 0
    },

    // Define the 'price' field, which is a required number with a default value of 0
    price: {
      type: Number, // Data type for price is Number
      required: true, // Field is required
      default: 0, // Default value is set to 0
    },

    // Define the 'image' field, which is an optional string
    image: {
      type: String, // Data type for image is String
      required: false, // Field is optional
    },

    // Define the 'comment' field, which is an optional string
    comment: {
      type: String, // Data type for comment is String
      required: false, // Field is optional
    },
  },

  // Add timestamps to record creation and update times automatically
  {
    timestamps: true,
  }
);

// Create a Product model from the schema
const Product = mongoose.model("Product", ProductSchema);

// Export the Product model to use it in other parts of the application
module.exports = Product;
